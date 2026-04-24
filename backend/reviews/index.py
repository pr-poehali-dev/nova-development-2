"""Получение и сохранение отзывов клиентов ChinaCargo"""
import json
import os
import psycopg2


def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"])


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    method = event.get("httpMethod", "GET")

    if method == "GET":
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            "SELECT id, name, company, rating, text, created_at FROM reviews ORDER BY created_at DESC LIMIT 50"
        )
        rows = cur.fetchall()
        cur.close()
        conn.close()
        reviews = [
            {
                "id": r[0],
                "name": r[1],
                "company": r[2],
                "rating": r[3],
                "text": r[4],
                "created_at": r[5].isoformat(),
            }
            for r in rows
        ]
        return {"statusCode": 200, "headers": headers, "body": json.dumps({"reviews": reviews})}

    if method == "POST":
        body = json.loads(event.get("body") or "{}")
        name = (body.get("name") or "").strip()
        company = (body.get("company") or "").strip()
        rating = int(body.get("rating") or 0)
        text = (body.get("text") or "").strip()

        if not name or not text or rating < 1 or rating > 5:
            return {
                "statusCode": 400,
                "headers": headers,
                "body": json.dumps({"error": "Заполните все обязательные поля"}),
            }

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO reviews (name, company, rating, text) VALUES (%s, %s, %s, %s) RETURNING id, created_at",
            (name, company or None, rating, text),
        )
        row = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()

        return {
            "statusCode": 201,
            "headers": headers,
            "body": json.dumps({
                "id": row[0],
                "name": name,
                "company": company or None,
                "rating": rating,
                "text": text,
                "created_at": row[1].isoformat(),
            }),
        }

    return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"})}
