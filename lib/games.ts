export type Game = {
  slug: string;
  title: string;
  players: string;
  duration: number;
  category: string;
  description: string;
};

export const games: Game[] = [
  {
    slug: "wingspan",
    title: "Wingspan",
    players: "1-5",
    duration: 70,
    category: "Стратегия",
    description:
      "Игроки привлекают птиц в свои заповедники, выстраивая цепочки бонусов и собирая карточки редких видов.",
  },
  {
    slug: "catan",
    title: "Колонизаторы",
    players: "3-4",
    duration: 90,
    category: "Стратегия",
    description:
      "Классика про освоение острова: добываете ресурсы, строите дороги и города и бесконечно торгуетесь с соседями.",
  },
  {
    slug: "carcassonne",
    title: "Каркассон",
    players: "2-5",
    duration: 40,
    category: "Семейная",
    description:
      "Выкладываете тайлы и собираете из них средневековый пейзаж, расставляя подданных по городам, дорогам и монастырям.",
  },
  {
    slug: "ticket-to-ride",
    title: "Билет на поезд",
    players: "2-5",
    duration: 60,
    category: "Семейная",
    description:
      "Собираете вагоны и прокладываете железные дороги между городами, стараясь закрыть маршруты раньше соперников.",
  },
  {
    slug: "sushi-go",
    title: "Sushi Go!",
    players: "2-5",
    duration: 20,
    category: "Карточная",
    description:
      "Быстрая игра на драфт: берёте одну карту из руки и передаёте остальные соседу, собирая самый вкусный сет суши.",
  },
  {
    slug: "munchkin",
    title: "Манчкин",
    players: "3-6",
    duration: 90,
    category: "Карточная",
    description:
      "Пародия на подземелья и драконов: качаете уровни, наряжаетесь в нелепую броню и подло мешаете друзьям победить.",
  },
  {
    slug: "codenames",
    title: "Codenames",
    players: "4-8",
    duration: 15,
    category: "Вечеринка",
    description:
      "Две команды ищут своих агентов по одному слову-подсказке. Главное — не навести товарищей на убийцу.",
  },
  {
    slug: "dixit",
    title: "Диксит",
    players: "3-6",
    duration: 30,
    category: "Вечеринка",
    description:
      "Игра на ассоциации с сюрреалистичными иллюстрациями: описываете картинку так, чтобы вас поняли не все, а только некоторые.",
  },
];

export const categories = ["Стратегия", "Семейная", "Карточная", "Вечеринка"];

export const categoryGradients: Record<string, string> = {
  "Стратегия": "bg-[radial-gradient(ellipse_75%_160%_at_28%_7%,#69d5f3_0%,#4fc4e5_25%,#35b4d7_50%,#1aa3c9_75%,#0092ba_100%)]",
  "Семейная":  "bg-[radial-gradient(ellipse_75%_160%_at_28%_7%,#9dffd4_0%,#76efc9_25%,#4edfbe_50%,#27ceb3_75%,#00bea8_100%)]",
  "Карточная": "bg-[radial-gradient(ellipse_75%_160%_at_28%_7%,#f3f369_0%,#f4cd85_25%,#f5a7a1_50%,#f681be_75%,#f65bda_100%)]",
  "Вечеринка": "bg-[radial-gradient(ellipse_75%_160%_at_28%_7%,#d7d5fa_0%,#b8b4f5_25%,#9993f0_50%,#7a72ea_75%,#5b52e5_100%)]",
};

export const categoryColors: Record<string, string> = {
  "Стратегия": "bg-[#69d5f3]/30 text-[#69d5f3]",
  "Семейная":  "bg-[#69f3cc]/30 text-[#69f3cc]",
  "Карточная": "bg-[#f36980]/30 text-[#f369b0]",
  "Вечеринка": "bg-[#a269f3]/30 text-[#a269f3]",
};
