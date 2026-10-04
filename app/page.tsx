import Catalog from "@/components/Catalog";
import Glow from "@/components/Glow";
import { Stat } from "@/components/Stat";
import { categories, games } from "@/lib/games";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-24 pb-24">
      <Hero />
      <Catalog/>
    </div>);
}

function Hero() {
  const durations = games.map((g) => g.duration);
  const min = Math.min(...durations);
  const max = Math.max(...durations);

  return (
    <section className="relative flex min-h-svh flex-col justify-center gap-12 py-16 sm:gap-16">
      <Glow
        side="right"
        className="right-[calc(50%-50vw)] top-1/2 hidden -translate-y-1/2 sm:block"
      />

      <div className="flex flex-col gap-5">
        <span className="text-sm uppercase tracking-[0.2em] text-accent">
          Настольные игры — подборка
        </span>

        <h1 className="max-w-197 bg-gradient-to-r from-white to-muted bg-clip-text font-display text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Что достать со шкафа сегодня?
        </h1>

        <p className="max-w-151 text-muted">
          Восемь проверенных настолок с честным временем партии — от
          пятнадцатиминутного Codenames до вечера за «Колонизаторами». Выбирайте
          по настроению и количеству людей за столом.
        </p>
      </div>

      <div className="flex max-w-164 justify-between">
        <Stat value={games.length} label="игр" />
        <Stat value={categories.length} label="категорий" />
        <Stat value={`${min}-${max}`} label="минут" />
      </div>
    </section>
  );
}
