"use client";

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

function getTransform(direction, y, visible) {
  if (visible) return direction === "zoom" ? "scale(1)" : "translate(0, 0)";
  switch (direction) {
    case "left":
      return `translateX(-${y}px)`;
    case "right":
      return `translateX(${y}px)`;
    case "down":
      return `translateY(-${y}px)`;
    case "zoom":
      return "scale(0.92)";
    default:
      return `translateY(${y}px)`;
  }
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  direction = "up",
  duration = 800,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(direction, y, visible),
        transition: `opacity ${duration}ms ${EASE}, transform ${duration}ms ${EASE}`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
