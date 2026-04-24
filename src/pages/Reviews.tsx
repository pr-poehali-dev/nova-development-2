import { useState, useEffect } from "react"
import { ArrowLeft, Star } from "lucide-react"
import { Link } from "react-router-dom"
import ThemeToggle from "@/components/landing/ThemeToggle"
import func2url from "../../backend/func2url.json"

const API = func2url.reviews

interface Review {
  id: number
  name: string
  company: string | null
  rating: number
  text: string
  created_at: string
}

function StarRating({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={28}
          className={`cursor-pointer transition-colors ${
            s <= (hovered || value)
              ? "fill-[#d4a017] text-[#d4a017]"
              : "text-gray-300 dark:text-gray-600"
          }`}
          onMouseEnter={() => onChange && setHovered(s)}
          onMouseLeave={() => onChange && setHovered(0)}
          onClick={() => onChange && onChange(s)}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const date = new Date(review.created_at).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return (
    <div className="card p-6 shadow-md">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="font-semibold text-black dark:text-white">{review.name}</div>
          {review.company && (
            <div className="text-sm text-gray-500 dark:text-gray-400">{review.company}</div>
          )}
        </div>
        <div className="flex flex-col items-end gap-1">
          <StarRating value={review.rating} />
          <span className="text-xs text-gray-400">{date}</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{review.text}</p>
    </div>
  )
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const [form, setForm] = useState({ name: "", company: "", rating: 0, text: "" })

  const fetchReviews = async () => {
    const res = await fetch(API)
    const data = await res.json()
    setReviews(data.reviews)
    setLoading(false)
  }

  useEffect(() => {
    fetchReviews()
    const interval = setInterval(fetchReviews, 10000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!form.name.trim() || !form.text.trim() || form.rating === 0) {
      setError("Пожалуйста, заполните имя, текст и выберите оценку")
      return
    }
    setSubmitting(true)
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (res.ok) {
      setReviews((prev) => [data, ...prev])
      setForm({ name: "", company: "", rating: 0, text: "" })
      setSuccess(true)
      setTimeout(() => setSuccess(false), 4000)
    } else {
      setError(data.error || "Ошибка при отправке")
    }
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-[#120808]/90 backdrop-blur-sm shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-black dark:text-white hover:text-[#c8102e] dark:hover:text-[#e8d48b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-2xl font-bold">
              China<span className="text-[#c8102e]">Cargo</span>
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="container py-16">
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="text-black dark:text-white text-4xl md:text-5xl font-medium leading-tight mb-4">
            Отзывы
            <span className="block text-[#c8102e] dark:text-[#e8d48b]">наших клиентов</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Реальные отзывы от компаний, которые уже работают с нами. Оставьте свой — он появится сразу.
          </p>
        </div>

        {/* Форма */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="card p-8 shadow-md">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-6">Оставить отзыв</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Ваше имя <span className="text-[#c8102e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Петров"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e0f0f] text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#c8102e] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Компания
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="ООО Ромашка"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e0f0f] text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#c8102e] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Оценка <span className="text-[#c8102e]">*</span>
                </label>
                <StarRating value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Ваш отзыв <span className="text-[#c8102e]">*</span>
                </label>
                <textarea
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  rows={4}
                  placeholder="Расскажите о вашем опыте работы с нами..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e0f0f] text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#c8102e] transition-colors resize-none"
                />
              </div>

              {error && <p className="text-[#c8102e] text-sm">{error}</p>}
              {success && (
                <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Спасибо! Ваш отзыв опубликован.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-60"
              >
                {submitting ? "Отправляем..." : "Опубликовать отзыв"}
              </button>
            </form>
          </div>
        </div>

        {/* Список отзывов */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
            {loading ? "Загружаем..." : `Отзывов: ${reviews.length}`}
          </h2>
          {!loading && reviews.length === 0 && (
            <div className="card p-10 text-center text-gray-500 dark:text-gray-400">
              Отзывов пока нет. Будьте первым!
            </div>
          )}
          <div className="space-y-4">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
