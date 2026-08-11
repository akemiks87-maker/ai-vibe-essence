import { Zap, Bot, Palette, Plug } from "lucide-react";

const services = [
  {
    id: "mvp",
    title: "MVP за неделю",
    description:
      "Превращаю идею в работающий прототип за 7 дней: интерфейс, логика, база данных и деплой. Без долгих согласований и бюрократии.",
    result: "Работающий продукт за 7 дней",
    icon: Zap,
  },
  {
    id: "automation",
    title: "AI-автоматизация",
    description:
      "Внедряю ИИ в рабочие процессы: генерация контента, обработка данных, чат-боты и автоматические сценарии. Экономлю часы ручной работы.",
    result: "Экономия до 80% времени",
    icon: Bot,
  },
  {
    id: "uiux",
    title: "UI/UX с вайбкодингом",
    description:
      "Создаю современные интерфейсы в тесной связке с AI: от вайрфреймов до финальной вёрстки. Дизайн, который продаёт и удобен в использовании.",
    result: "Конверсионный интерфейс",
    icon: Palette,
  },
  {
    id: "integrations",
    title: "Интеграции",
    description:
      "Соединяю продукты с внешними сервисами: платежи, CRM, мессенджеры, API и базы данных. Всё работает как единая экосистема.",
    result: "Единый цифровой поток",
    icon: Plug,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-16 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-center gap-3 sm:mb-16">
          <span className="inline-flex h-3 w-3 rounded-full bg-gradient-accent" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Что я делаю
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 sm:p-6"
              >
                {/* Иконка */}
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-accent shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-primary/40 sm:mb-6 sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 animate-icon-float text-primary-foreground sm:h-8 sm:w-8" />
                </div>

                {/* Контент */}
                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Ключевой результат */}
                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center rounded-full bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-gradient-accent">
                      {service.result}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
