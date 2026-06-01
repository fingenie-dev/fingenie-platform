type Props = { data: number[]; height?: number; width?: number; up?: boolean; className?: string };

export function Sparkline({ data, height = 32, width = 96, up, className }: Props) {
  if (!data.length) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data.map((v, i) => `${i * step},${height - ((v - min) / range) * height}`).join(" ");
  const isUp = up ?? data[data.length - 1] >= data[0];
  const color = isUp ? "var(--success)" : "var(--danger)";
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className}>
      <defs>
        <linearGradient id={`sg-${isUp}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={points} />
      <polygon fill={`url(#sg-${isUp})`} points={`0,${height} ${points} ${width},${height}`} />
    </svg>
  );
}
