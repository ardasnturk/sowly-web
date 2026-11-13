import type { CSSProperties } from "react";
import { crop } from "../config";

/**
 * A produce photo in a pale-green circle that drifts gently. Purely decorative, so it is
 * hidden from assistive technology. Position it with `className` (absolute + size).
 */
export function Produce({ name, className = "", duration = 9, delay = 0, dx = 6, dy = 12, rot = 4 }: {
  name: string;
  className?: string;
  /** Seconds per drift loop. */
  duration?: number;
  delay?: number;
  dx?: number;
  dy?: number;
  rot?: number;
}) {
  const style = {
    "--duration": `${duration}s`,
    "--dx": `${dx}px`,
    "--dy": `${dy}px`,
    "--rot": `${rot}deg`,
    animationDelay: `${delay}s`,
  } as CSSProperties;
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      <div className="animate-drift h-full w-full overflow-hidden rounded-full bg-mint shadow-soft ring-4 ring-white/80 dark:ring-white/10" style={style}>
        <img src={crop(name)} alt="" width={320} height={320} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
