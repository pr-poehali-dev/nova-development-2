import { ArrowLeft, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import ContactFormButton from "@/components/landing/ContactFormButton"
import ThemeToggle from "@/components/landing/ThemeToggle"

const steps = [
  {
    num: "01",
    title: "Выбор маршрута",
    desc: "Подбираем оптимальный способ доставки: авиа (7–14 дней), жд (18–25 дней) или море (35–45 дней) — под ваши сроки и бюджет.",
  },
  {
    num: "02",
    title: "Консолидация груза",
    desc: "Если у вас несколько поставщиков — собираем весь товар на нашем складе в Китае и отправляем единым грузом.",
  },
  {
    num: "03",
    title: "Таможенное оформление",
    desc: "Оформляем декларации, сертификаты и все необходимые документы. Платим пошлины и сборы. Вам не нужно ни во что вникать.",
  },
  {
    num: "04",
    title: "Доставка до склада",
    desc: "Передаём груз на ваш склад или в любую точку России. Отслеживаете статус в режиме реального времени.",
  },
]

const benefits = [
  "Авиа, жд и морские маршруты",
  "Консолидация от нескольких поставщиков",
  "Полное таможенное оформление",
  "Сертификаты и разрешительные документы",
  "Страхование груза",
  "Доставка до двери или склада",
]

const modes = [
  { icon: "Plane", title: "Авиа", time: "7–14 дней", desc: "Для срочных или дорогостоящих грузов" },
  { icon: "Train", title: "Ж/д", time: "18–25 дней", desc: "Оптимальный баланс скорости и цены" },
  { icon: "Ship", title: "Море", time: "35–45 дней", desc: "Крупные объёмы по минимальной цене" },
]

export default function ServiceDelivery() {
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
            <Icon name="Truck" size={16} />
            Услуга
          </div>
          <h1 className="text-black dark:text-white text-4xl md:text-5xl font-medium leading-tight mb-6">
            Доставка
            <span className="block text-[#c8102e] dark:text-[#e8d48b]">и таможня</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            Организуем доставку из любой точки Китая до вашего склада и берём на себя всё таможенное оформление. Вы просто ждёте товар.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {modes.map((m) => (
            <div key={m.title} className="card p-6 shadow-md text-center">
              <div className="w-14 h-14 rounded-full bg-[#c8102e] flex items-center justify-center mx-auto mb-4">
                <Icon name={m.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-1">{m.title}</h3>
              <div className="text-[#c8102e] dark:text-[#e8d48b] font-bold text-lg mb-2">{m.time}</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{m.desc}</p>
            </div>
          ))}
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
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Рассчитать стоимость доставки?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Сообщите вес и габариты груза — дадим точную цену в течение часа.</p>
          <ContactFormButton>Получить бесплатный расчёт</ContactFormButton>
        </div>
      </main>
    </div>
  )
}
