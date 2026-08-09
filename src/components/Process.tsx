const steps = [
  {
    id: 1,
    title: "Погружаюсь в задачу",
    description:
      "Разбираю бизнес-цель, аудиторию и ограничения. Формирую чёткое ТЗ и выбираю стек под задачу.",
  },
  {
    id: 2,
    title: "Создаю с ИИ",
    description:
      "Генерирую архитектуру, интерфейс и код с помощью AI-инструментов, сохраняя контроль качества и логики.",
  },
  {
    id: 3,
    title: "Тестирую и улучшаю",
    description:
      "Проверяю работоспособность, собираю обратную связь и довожу продукт до стабильного результата.",
  },
  {
    id: 4,
    title: "Запускаю и масштабирую",
    description:
      "Вывожу проект в прод, настраиваю метрики и помогаю расти: доработки, интеграции, новые фичи.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-16 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-center gap-3 sm:mb-16">
          <span className="inline-flex h-3 w-3 rounded-full bg-gradient-accent" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Как я работаю
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative hidden lg:block">
          {/* Horizontal connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="relative grid grid-cols-4 gap-8">
            {steps.map((step) => (
              <article
                key={step.id}
                className="group flex flex-col items-center text-center"
              >
                {/* Number badge on timeline */}
                <div className="relative z-10 mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card shadow-lg shadow-primary/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-primary/15">
                  <span className="font-display text-2xl font-bold text-gradient-accent">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile + tablet: vertical timeline */}
        <div className="relative lg:hidden">
          {/* Vertical connector line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="relative space-y-8">
            {steps.map((step) => (
              <article
                key={step.id}
                className="group flex items-start gap-5"
              >
                {/* Number badge on timeline */}
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border bg-card shadow-lg shadow-primary/5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:shadow-primary/15">
                  <span className="font-display text-xl font-bold text-gradient-accent">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex-1 rounded-3xl border border-border bg-card p-5 transition-all duration-300 group-hover:border-primary/30">
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
