import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  bordered = false,
  hover = true,
}) => {
  return (
    <div
      className={twMerge(
        `
        glass-panel
        rounded-lg
        p-6
        relative
        overflow-hidden
        transition-all
        duration-300
        `,
        bordered &&
          "border border-gold-500/30 shadow-[0_0_15px_rgba(213,199,163,0.05)]",
        hover &&
          "hover:shadow-[0_0_30px_rgba(213,199,163,0.08)] hover:-translate-y-0.5",
        className
      )}
    >
      {/* Tech Corner Accents */}
      {bordered && (
        <>
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-500/60" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold-500/60" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold-500/60" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-500/60" />
        </>
      )}

      {children}
    </div>
  );
};
