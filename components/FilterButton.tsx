export default function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full px-7 py-2 transition duration-300 ${
        isActive
          ? "-translate-y-1.5 bg-accent font-bold text-white shadow-[0_0_10px_#c5f3ff]"
          : "border border-white/10 bg-white/10 text-muted hover:-translate-y-1 hover:text-light"
      }`}
    >
      {label}
    </button>
  );
}
