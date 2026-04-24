import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "С чего начать работу с вами?",
    answer:
      "Просто напишите нам — расскажите, какой товар вас интересует, примерный объём и сроки. Мы проведём бесплатную консультацию, предложим поставщиков и рассчитаем стоимость под ваш запрос.",
  },
  {
    id: 2,
    question: "Сколько времени занимает доставка из Китая?",
    answer:
      "Зависит от способа доставки. Авиа — 7–14 дней, железная дорога — 18–25 дней, морем — 35–45 дней. Мы подбираем оптимальный маршрут под ваши сроки и бюджет.",
  },
  {
    id: 3,
    question: "Как вы гарантируете качество товара?",
    answer:
      "Наши инспекторы находятся в Китае и лично проверяют партию на производстве до отгрузки. Вы получаете фото- и видеоотчёт. Если что-то не так — товар не уходит, пока не будет исправлено.",
  },
  {
    id: 4,
    question: "Какой минимальный заказ вы принимаете?",
    answer:
      "Мы работаем как с крупным оптом, так и с небольшими пробными партиями. Минимальной суммы нет — расскажите о своём запросе, и мы найдём решение.",
  },
  {
    id: 5,
    question: "Вы занимаетесь таможенным оформлением?",
    answer:
      "Да, полностью. Мы оформляем все необходимые документы, декларации и сертификаты. Вам не нужно разбираться в таможенных процедурах — мы берём это на себя.",
  },
  {
    id: 6,
    question: "Как происходит оплата?",
    answer:
      "Работаем по договору. Стандартная схема — предоплата за товар и логистику, остаток после получения. Возможна поэтапная оплата для регулярных поставок.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#c8102e] dark:text-[#e8d48b]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Отвечаем на самые частые вопросы о поставках из Китая. Не нашли ответ — напишите нам, и мы разберём вашу ситуацию лично.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#c8102e] dark:hover:text-[#e8d48b] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#c8102e]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
