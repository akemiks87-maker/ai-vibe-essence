import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

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

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Hero />
      <Projects />
    </main>
  );
}

