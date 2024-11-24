import css from "./style.module.css";
import { useState, useEffect } from "react";

interface OntouchEffectProps {
  position?: { x: number; y: number };
}

const OntouchEffect = ({ position }: OntouchEffectProps) => {
  const [touchPoints, setTouchPoints] = useState<{ x: number; y: number }[]>(
    []
  );

  useEffect(() => {
    if (position) {
      setTouchPoints([position]);

      setTimeout(() => {
        setTouchPoints([]);
      }, 600);
    }
  }, [position]);

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    setTouchPoints([{ x, y }]);
  };

  return (
    <div className={css["touch-container"]} onTouchStart={handleTouch}>
      {touchPoints.map((point, index) => (
        <span
          key={`touch-${index}-${point.x}-${point.y}`}
          className={css["touch-effect"]}
          style={{
            top: `${point.y}px`,
            left: `${point.x}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default OntouchEffect;
