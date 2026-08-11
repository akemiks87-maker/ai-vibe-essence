import { Send, Mail } from "lucide-react";

const TELEGRAM_LINK = "https://t.me/akemiks87";
const EMAIL_LINK = "mailto:akemiks@mail.ru";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-16 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-border bg-card/80 p-8 text-center backdrop-blur-sm sm:p-12 lg:p-16">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Давайте создадим продукт
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Расскажите о задаче — я предложу, как быстро запустить MVP с помощью AI.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-accent inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
          >
            <Send className="h-4 w-4" />
            Написать в Telegram
          </a>

          <a
            href={EMAIL_LINK}
            className="bg-gradient-accent inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Написать на Email
          </a>
        </div>
      </div>
    </section>
  );
}
