import { categoryColors, categoryGradients, type Game } from "@/lib/games";
import Link from "next/link";

export default function Card ({game}: {game: Game}) {
    return(
        <Link
            className="bg-white/10 border border-white/10 rounded-3xl p-5 flex flex-col gap-7"
            href={`/games/${game.slug}`}>
            <div className={`relative h-30 w-full overflow-hidden rounded-2xl ${categoryGradients[game.category]}`}>
                <span className="absolute left-[60%] top-[28%] font-medium text-8xl text-white/40">
                    {game.duration}
                </span>
            </div>

            <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-4 sm:flex-row justify-between">
                    <h2 className="text-xl font-bold">
                        {game.title}
                    </h2>

                    <span className={`w-fit rounded-full border border-white/10 px-4 py-1 text-sm font-medium ${categoryColors[game.category]}`}>
                        {game.category}
                    </span>
                </div>
                
                <p className="text-gray-500 font-medium">
                    {`${game.players} игроков - ${game.duration} мин`}
                </p>
            </div>
            
        </Link>
    )
}
