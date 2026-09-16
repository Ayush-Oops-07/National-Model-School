import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "glass" | "outline-light" | "outline-dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "brand-gradient text-white shadow-sm hover:shadow-md hover:brightness-105 active:translate-y-0 focus-visible:outline-navy-900 border border-white/20",
  secondary:
    "glass-button text-ink-950 font-semibold focus-visible:outline-navy-900",
  glass:
    "bg-white/80 backdrop-blur-md border border-white/90 text-navy-950 font-semibold shadow-xs hover:bg-white hover:border-navy-900/20 hover:shadow-sm focus-visible:outline-navy-900",
  ghost:
    "bg-transparent text-ink-900 hover:text-navy-900 hover:bg-navy-100/60 active:translate-y-0 focus-visible:outline-navy-900",
  "outline-light":
    "border border-white/70 bg-white/15 backdrop-blur-md text-white hover:bg-white hover:text-navy-950 hover:shadow-sm focus-visible:outline-white",
  "outline-dark":
    "border border-line bg-white/90 text-ink-900 hover:border-navy-900/40 hover:text-navy-900 hover:shadow-xs focus-visible:outline-navy-900",
};

const sizeStyles: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  sm: "px-3.5 py-1.5 text-xs rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-6 py-3.5 text-sm sm:text-base rounded-xl",
};

const base =
  "group inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonBaseProps &
  (
    | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
