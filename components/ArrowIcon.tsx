type ArrowDirection = "up-right" | "down-left" | "up" | "down";

type ArrowIconProps = {
  className?: string;
  direction?: ArrowDirection;
};

const rotation: Record<ArrowDirection, number> = {
  "up-right": 0,
  "down-left": 180,
  up: -45,
  down: 135,
};

export default function ArrowIcon({ className = "", direction = "up-right" }: ArrowIconProps) {
  return <svg
    className={`arrow-icon${className ? ` ${className}` : ""}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <g transform={`rotate(${rotation[direction]} 12 12)`}>
      <path d="M5 19 19 5M9 5h10v10" />
    </g>
  </svg>;
}
