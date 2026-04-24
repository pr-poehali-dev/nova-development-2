import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "Поиск поставщиков",
    description: "Находим проверенных производителей на фабриках Китая, проводим переговоры и получаем лучшие условия по цене и качеству.",
    icon: "Search",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Контроль качества",
    description: "Инспектируем товар на производстве до отгрузки. Вы получаете только то, что заказали — без сюрпризов.",
    icon: "ShieldCheck",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Доставка и таможня",
    description: "Организуем логистику, оформляем все документы и растамаживаем груз. Товар приезжает быстро и без лишних затрат.",
    icon: "Truck",
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Всё для вашего
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">импортного бизнеса</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Берём на себя весь цикл поставки — от поиска поставщика в Китае до доставки на ваш склад. Работаем прозрачно: вы всегда знаете, где ваш товар и сколько стоит каждый этап.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <Icon name={service.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}