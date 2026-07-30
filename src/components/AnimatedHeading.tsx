import { useEffect, useState } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
  letterSpacing?: string;
}

export function AnimatedHeading({
  text,
  className,
  delay = 200,
  charDelay = 30,
  letterSpacing = "-0.04em",
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const lines = text.split("\n");

  return (
    <h1 className={className} style={{ letterSpacing }}>
      {lines.map((line, lineIndex) => {
        const lineOffset = lineIndex * line.length * charDelay;
        let charIndex = -1;

        return (
          <span key={lineIndex} className="block">
            {line.split(" ").map((word, wordIndex, words) => {
              const wordChars = word.split("");
              const nodes = wordChars.map((char) => {
                charIndex += 1;
                return { char, index: charIndex };
              });
              let spaceNode: { char: string; index: number } | null = null;
              if (wordIndex < words.length - 1) {
                charIndex += 1;
                spaceNode = { char: "\u00A0", index: charIndex };
              }

              return (
                <span key={wordIndex}>
                  <span className="inline-block whitespace-nowrap">
                    {nodes.map(({ char, index }) => (
                      <span
                        key={index}
                        className="inline-block"
                        style={{
                          opacity: started ? 1 : 0,
                          transform: started ? "translateX(0)" : "translateX(-18px)",
                          transition: "opacity 500ms ease-out, transform 500ms ease-out",
                          transitionDelay: `${lineOffset + index * charDelay}ms`,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  {spaceNode && (
                    <span
                      className="inline-block"
                      style={{
                        opacity: started ? 1 : 0,
                        transform: started ? "translateX(0)" : "translateX(-18px)",
                        transition: "opacity 500ms ease-out, transform 500ms ease-out",
                        transitionDelay: `${lineOffset + spaceNode.index * charDelay}ms`,
                      }}
                    >
                      {spaceNode.char}
                    </span>
                  )}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
