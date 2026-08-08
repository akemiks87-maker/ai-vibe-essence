import { useEffect, useRef } from "react";
import splash from "@/assets/hero-splash.jpg";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty("--mx", `${x}`);
        el.style.setProperty("--my", `${y}`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ "--mx": 0, "--my": 0 } as React.CSSProperties}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-background px-6 py-20 sm:px-10 sm:py-28"
    >
      {/* Размытая картинка цветных брызг, реагирует на курсор */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 transition-transform duration-500 ease-out"
        style={{
          transform:
            "translate3d(calc(var(--mx) * 32px), calc(var(--my) * 32px), 0) scale(1.15)",
        }}
      >
        <img
          src={splash}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-70 blur-2xl sm:blur-3xl"
        />
      </div>

      {/* Затемнение для читаемости текста */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-background/55"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          Vibecoding &middot; AI Products
        </p>

        <h1
          className="mt-8 max-w-4xl font-display font-extrabold leading-[1.1] tracking-tight text-foreground"
          style={{ fontSize: "clamp(2rem, 6vw, 4.25rem)" }}
        >
          Создаю <span className="text-gradient-accent">AI-продукты</span> через
          вайбкодинг
        </h1>

        <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-muted-foreground sm:text-lg">
          Превращаю идею в работающий продукт за дни, а не месяцы: прототип,
          интерфейс, база данных и AI-логика — в одном потоке.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#projects"
            className="bg-gradient-accent inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
          >
            Посмотреть проекты
          </a>
          <a
            href="#contact"
            className="bg-gradient-accent inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
          >
            Связаться
          </a>
        </div>

        <p className="mt-16 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Product engineer &middot; Прототипы, MVP, интеграции
        </p>
      </div>
    </section>
  );
}
