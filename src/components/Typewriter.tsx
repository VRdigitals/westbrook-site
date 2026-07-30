import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  className?: string;
  id?: string;
  speed?: number;
  delay?: number;
  start?: boolean;
  as?: "h2" | "h1" | "p";
}

export function Typewriter({
  text,
  className,
  id,
  speed = 35,
  delay = 300,
  start = true,
  as: Tag = "h2",
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setCount(text.length);
      return;
    }

    let interval = 0;
    const timer = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            window.clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(interval);
    };
  }, [start, text, speed, delay]);

  const done = count >= text.length;

  return (
    <Tag id={id} className={className}>
      <span>{text.slice(0, count)}</span>
      {!done && <span className="wb-caret" aria-hidden />}
    </Tag>
  );
}