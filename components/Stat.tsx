export function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-white to-muted bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-muted">{label}</p>
    </div>
  );
}
