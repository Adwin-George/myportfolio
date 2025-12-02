import React from "react";

/**
 * GoldSparks
 * - Renders a small set of sparkle elements positioned around the hero area
 * - Styling and animation via CSS classes (see CSS snippet below)
 * - You can adjust `count` and `area` props
 */
export default function GoldSparks({ count = 10 }) {
  // create an array of randomly positioned sparks
  const sparks = Array.from({ length: count }).map((_, i) => {
    const left = Math.round(Math.random() * 100);
    const top = Math.round(Math.random() * 60); // keep mostly top area
    const size = Math.round(Math.random() * 18) + 6; // px
    const delay = (Math.random() * 4).toFixed(2);
    const duration = (3 + Math.random() * 4).toFixed(2);
    const opacity = (0.35 + Math.random() * 0.7).toFixed(2);
    return { left, top, size, delay, duration, opacity, key: `spark-${i}` };
  });

  return (
    <div aria-hidden className="gold-sparks-container">
      {sparks.map((s) => (
        <div
          key={s.key}
          className="spark-gold particle-dot"
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            opacity: s.opacity,
            transform: "translate(-50%, -50%)",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
