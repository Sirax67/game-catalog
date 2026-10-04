"use client";

import { useState } from "react";
import Card from "@/components/Card";
import FilterButton from "@/components/FilterButton";
import { categories, games } from "@/lib/games";

export default function Catalog() {
  const [active, setActive] = useState("Все");

  const tabs = ["Все", ...categories];

  const filtered =
    active === "Все" ? games : games.filter((g) => g.category === active);

  return (
    <section className="relative flex flex-col gap-12 sm:gap-16">
      <div className="flex flex-wrap items-center gap-4">
        {tabs.map((tab) => (
          <FilterButton
            key={tab}
            label={tab}
            isActive={tab === active}
            onClick={() => setActive(tab)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 items-start gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((game) => (
          <Card key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}
