import { GraduationCap, BrainCircuit, Rocket } from "lucide-react";

const projects = [
  {
    id: "studyflow",
    title: "StudyFlow",
    description:
      "AI-платформа для персонализированного обучения. Адаптирует план, материалы и темп под цели каждого ученика.",
    tags: ["React", "OpenAI", "PostgreSQL", "Tailwind"],
    icon: GraduationCap,
    highlight: "Персонализация",
  },
  {
    id: "neuroanalyst",
    title: "НейроАналитик",
    description:
      "AI-сервис для анализа данных. Превращает сырые данные в понятные инсайты, отчёты и прогнозы.",
    tags: ["Python", "FastAPI", "Pandas", "LLM"],
    icon: BrainCircuit,
    highlight: "Инсайты",
  },
  {
    id: "launchpro",
    title: "LaunchPro",
    description:
      "Лендинг для продукта. Быстрая посадочная страница с конверсионной структурой и гибкой CMS.",
    tags: ["Next.js", "Framer", "Stripe", "Vercel"],
    icon: Rocket,
    highlight: "Конверсия",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-16 bg-background px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-center gap-3 sm:mb-16">
          <span className="inline-flex h-3 w-3 rounded-full bg-gradient-accent" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Избранные проекты
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Превью-плейсхолдер */}
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-accent">
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,oklch(1_0_0/0.16),oklch(1_0_0/0)_60%)]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-background/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Контент */}
                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Теги технологий */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-secondary/60 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Градиентный акцент внизу карточки */}
                  <div className="mt-6 pt-4">
                    <span className="inline-flex items-center rounded-full bg-gradient-accent px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                      {project.highlight}
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
