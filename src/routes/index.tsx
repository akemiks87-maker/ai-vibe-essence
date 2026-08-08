import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import splash from "@/assets/hero-splash.jpg";

const title = "Вайбкодинг: AI-продукты и MVP под ключ";
const description =
  "Создаю AI-продукты через вайбкодинг: прототип, интерфейс, база данных и AI-логика за дни, а не месяцы.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function BlurredBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
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
    <div
      ref={wrapperRef}
      aria-hidden
      className="fixed inset-0 -z-50 overflow-hidden"
      style={{ "--mx": 0, "--my": 0 } as React.CSSProperties}
    >
      <img
        src={splash}
        alt=""
        width={1920}
        height={1280}
        className="h-full w-full object-cover opacity-70 blur-2xl sm:blur-3xl"
        style={{
          transform:
            "translate3d(calc(var(--mx) * 32px), calc(var(--my) * 32px), 0) scale(1.15)",
          transition: "transform 500ms ease-out",
        }}
      />
    </div>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen font-sans">
      <BlurredBackground />
      <Hero />
      <Projects />
    </main>
  );
}


