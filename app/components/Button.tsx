import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-md
    font-semibold
    uppercase tracking-wide
    transition-all duration-300
    focus:outline-none
    focus:ring-2 focus:ring-gold-500/40
    focus:ring-offset-2 focus:ring-offset-navy-900
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.98]
    `;

  const variants = {
    primary: `
      bg-gold-500 text-navy-900
      border border-transparent
      shadow-[0_0_15px_rgba(181,156,92,0.3)]
      hover:bg-gold-400
      hover:shadow-[0_0_30px_rgba(213,199,163,0.6)]
      `,
    secondary: `
      bg-transparent
      border border-gold-500/60
      text-gold-400
      hover:bg-gold-500/10
      hover:text-gold-300
      `,
    ghost: `
      bg-transparent
      text-white/70
      hover:text-gold-400
      hover:bg-navy-800
      `,
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={twMerge(
        clsx(baseStyles, variants[variant], sizes[size], fullWidth && "w-full"),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
