import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    slug: "electronics-case",
    title: "Электроника оптом",
    shortDescription: "Поставили 5 000 единиц электроники для сети магазинов. Срок: 28 дней от заявки до склада.",
    mainImage: "/portfolio-images/saas-dashboard-1.jpg",
  },
  {
    id: 2,
    slug: "textile-case",
    title: "Текстиль и одежда",
    shortDescription: "Организовали регулярные поставки одежды для российского бренда. Экономия 35% против местных цен.",
    mainImage: "/portfolio-images/ecommerce-interface-1.jpg",
  },
  {
    id: 3,
    slug: "equipment-case",
    title: "Промышленное оборудование",
    shortDescription: "Доставили крупногабаритное оборудование с завода в Гуандуне. Полное таможенное сопровождение.",
    mainImage: "/portfolio-images/ai-platform-1.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Примеры наших
        <span className="block text-[#c8102e] dark:text-[#e8d48b]">поставок</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Работаем с разными категориями товаров — от мелкой электроники до промышленного оборудования. Каждый клиент получает персонального менеджера и полный контроль над своим грузом.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 mb-4">{project.shortDescription}</p>
              <div className="inline-flex items-center text-[#c8102e] dark:text-[#e8d48b] text-sm font-medium group">
                Подробнее об этом кейсе{" "}
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Обсудить вашу поставку
        </a>
      </div>
    </section>
  )
}
