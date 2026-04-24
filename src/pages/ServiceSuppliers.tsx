import { ArrowLeft, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import ContactFormButton from "@/components/landing/ContactFormButton"
import ThemeToggle from "@/components/landing/ThemeToggle"

const steps = [
  {
    num: "01",
    title: "Анализ вашего запроса",
    desc: "Изучаем требования к товару: характеристики, объём, бюджет, сроки. Составляем техническое задание для поиска.",
  },
  {
    num: "02",
    title: "Поиск фабрик",
    desc: "Ищем производителей на Alibaba, 1688, через нашу базу проверенных контактов и партнёров в Китае.",
  },
  {
    num: "03",
    title: "Переговоры и отбор",
    desc: "Запрашиваем образцы, проводим переговоры по цене и условиям. Отбираем 2–3 лучших варианта для вас.",
  },
  {
    num: "04",
    title: "Финальный выбор",
    desc: "Представляем сравнительный анализ поставщиков. Вы принимаете решение — мы оформляем договор.",
  },
]

const benefits = [
  "Доступ к базе 500+ проверенных фабрик",
  "Переговоры на китайском языке",
  "Проверка юридического статуса компании",
  "Сравнительный анализ цен и условий",
  "Получение и проверка образцов",
  "Защита от фиктивных поставщиков",
]

export default function ServiceSuppliers() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-[#120808]/90 backdrop-blur-sm shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-black dark:text-white hover:text-[#c8102e] dark:hover:text-[#e8d48b] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-2xl font-bold">China<span className="text-[#c8102e]">Cargo</span></span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="container py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c8102e]/10 text-[#c8102e] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Search" size={16} />
            Услуга
          </div>
          <h1 className="text-black dark:text-white text-4xl md:text-5xl font-medium leading-tight mb-6">
            Поиск
            <span className="block text-[#c8102e] dark:text-[#e8d48b]">поставщиков</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            Находим надёжных производителей в Китае под ваши требования. Проверяем фабрики лично, ведём переговоры на китайском и добиваемся лучших условий для вашего бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step) => (
            <div key={step.num} className="card p-6 shadow-md">
              <div className="text-4xl font-bold text-[#c8102e]/20 dark:text-[#e8d48b]/20 mb-3">{step.num}</div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="card p-8 md:p-10 mb-16 shadow-md">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">Что вы получаете</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#c8102e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Готовы найти поставщика?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Опишите товар — мы начнём поиск в течение 24 часов.</p>
          <ContactFormButton>Получить бесплатный расчёт</ContactFormButton>
        </div>
      </main>
    </div>
  )
}
