"use client";
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration ?? 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div className="ts-card" key={`${index}-${i}`}>
                <p className="ts-mark font-display">&ldquo;</p>
                <p className="ts-quote">{text}</p>
                <div className="ts-person">
                  <img
                    src={image}
                    alt={name}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="ts-avatar"
                  />
                  <div>
                    <p className="ts-name font-display">{name}</p>
                    <p className="ts-role">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
