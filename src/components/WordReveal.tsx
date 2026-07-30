import { useInViewRef } from "@/components/useInViewRef";

interface WordRevealProps {
  text: string;
  className?: string;
  wordDelay?: number;
  startDelay?: number;
}

export function WordReveal({
  text,
  className,
  wordDelay = 28,
  startDelay = 0,
}: WordRevealProps) {
  const { ref, inView } = useInViewRef<HTMLParagraphElement>(0.4);
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`ab-word${inView ? " is-in" : ""}`}
          style={{ transitionDelay: `${startDelay + i * wordDelay}ms` }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
