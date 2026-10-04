export default function Glow({
  side = "right",
  className = "",
}: {
  side?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 h-61 w-108 ${
        side === "left" ? "left-0 -scale-x-100" : "right-0"
      } ${className}`}
    >
      <div className="h-full w-full overflow-hidden rounded-l-full bg-gradient-to-r from-base to-horizon">
        <div className="h-full w-full rounded-[inherit] shadow-[inset_0px_-10px_4px_0px_rgba(105,213,243,0.42),inset_32px_4px_31.9px_0px_rgba(0,0,0,0.18)]" />
      </div>
    </div>
  );
}
