import { ReactNode } from "react";
import { cn } from "../ui/utils";

export function Section({ 
  children, 
  variant = "light", 
  id, 
  "aria-label": ariaLabel 
}: { 
  children: ReactNode; 
  variant?: "light" | "dark"; 
  id?: string; 
  "aria-label"?: string;
}) {
  return (
    <section 
      id={id} 
      aria-label={ariaLabel}
      className={cn(
        "py-[88px] md:py-[120px] px-6 md:px-10",
        variant === "light" ? "bg-surface" : "bg-surface-dark",
        id && "scroll-mt-24"
      )}
    >
      {children}
    </section>
  );
}

export function Container({ 
  children, 
  size = "lg", 
  center = false, 
  className 
}: { 
  children: ReactNode; 
  size?: "sm" | "md" | "lg" | "xl"; 
  center?: boolean; 
  className?: string;
}) {
  const sizes = {
    sm: "max-w-[760px]",
    md: "max-w-[960px]",
    lg: "max-w-[1280px]",
    xl: "max-w-[1360px]",
  };

  return (
    <div className={cn(
      "mx-auto w-full px-6 md:px-10", 
      sizes[size], 
      center && "text-center", 
      className
    )}>
      {children}
    </div>
  );
}

export function SectionEyebrow({ 
  children, 
  variant = "indigo" 
}: { 
  children: ReactNode; 
  variant?: "indigo" | "gradient" 
}) {
  if (variant === "gradient") {
    return (
      <span className="text-[11px] font-semibold tracking-eyebrow uppercase font-display bg-clip-text text-transparent bg-brand-gradient">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] border border-[#E0E7FF] text-[11px] font-semibold tracking-eyebrow uppercase font-display">
      {children}
    </span>
  );
}

export function GradientText({ 
  children, 
  gradient = "brand",
  className
}: { 
  children: ReactNode; 
  gradient?: "brand" | "cta" | "indigo";
  className?: string;
}) {
  const gradients = {
    brand: "bg-brand-gradient",
    cta: "bg-cta-gradient",
    indigo: "bg-indigo-diag",
  };

  return (
    <span className={cn("bg-clip-text text-transparent", gradients[gradient], className)}>
      {children}
    </span>
  );
}

export function Pill({ 
  children, 
  variant = "indigo" 
}: { 
  children: ReactNode; 
  variant?: "indigo" | "violet" | "dark" 
}) {
  const variants = {
    indigo: "bg-[#EEF2FF] text-[#4F46E5] border-[#E0E7FF]",
    violet: "bg-[#F5F3FF] text-[#8B5CF6] border-[#E9D5FF]",
    dark: "bg-white/10 text-white/80 border-white/15",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-pill uppercase font-display border",
      variants[variant]
    )}>
      {children}
    </span>
  );
}

/**
 * FeaturedIcon - A core Untitled UI pattern
 * Used for prominent iconography in cards or sections
 */
export function FeaturedIcon({ 
  icon: Icon, 
  variant = "primary", 
  size = "md",
  className 
}: { 
  icon: any; 
  variant?: "primary" | "gray" | "success" | "error" | "warning"; 
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const variants = {
    primary: "bg-mist text-signal border-signal/10",
    gray: "bg-surface text-muted-text border-border-subtle",
    success: "bg-green-50 text-green-600 border-green-100",
    error: "bg-red-50 text-danger border-red-100",
    warning: "bg-amber-50 text-amber-600 border-amber-100",
  };

  const sizes = {
    sm: "size-10 p-2",
    md: "size-12 p-2.5",
    lg: "size-14 p-3",
  };

  return (
    <div className={cn(
      "rounded-xl border shadow-featured-icon flex items-center justify-center transition-all",
      variants[variant],
      sizes[size],
      className
    )}>
      <Icon className="w-full h-full" />
    </div>
  );
}

/**
 * BadgeGroup - A core Untitled UI pattern
 * Combines a pill with sub-text or a leading badge
 */
export function BadgeGroup({ 
  badge, 
  children, 
  className 
}: { 
  badge: ReactNode; 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-1.5 py-1 pr-3 rounded-full bg-white border border-[#F2F0EB] shadow-sm",
      className
    )}>
      <span className="px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] border border-[#E0E7FF] text-[11px] font-bold uppercase tracking-wider">
        {badge}
      </span>
      <span className="text-[12px] font-semibold text-[#344054]">
        {children}
      </span>
    </div>
  );
}

export function CTAButton({ 
  children, 
  variant = "primary", 
  as: Component = "button",
  className,
  ...props
}: { 
  children: ReactNode; 
  variant?: "primary" | "outline" | "ghost";
  as?: any;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "font-display font-semibold text-[16px] group inline-flex items-center gap-2.5 transition-all shadow-skeuomorphic",
        variant === "primary" 
          ? "bg-cta-gradient text-white px-8 py-4 rounded-cta shadow-cta hover:opacity-90 hover:shadow-cta-hover" 
          : variant === "outline"
          ? "border border-border-subtle bg-white text-body-text px-8 py-4 rounded-cta hover:bg-surface"
          : "text-muted-text hover:text-ink hover:bg-surface px-4 py-2 rounded-lg shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({ 
  children, 
  variant = "dark", 
  as: Component = "h2",
  className,
  style
}: { 
  children: ReactNode; 
  variant?: "dark" | "light"; 
  as?: "h1" | "h2" | "h3";
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Component 
      style={style}
      className={cn("font-display font-bold tracking-tight leading-heading text-[30px]", variant === "dark" ? "text-ink" : "text-white", Component === "h1" ? "text-h1 leading-display tracking-tight" : "text-h2", className)}
    >{children}</Component>
  );
}

export function StatBadge({ 
  icon: Icon, 
  label, 
  value, 
  className 
}: { 
  icon?: any; 
  label: string; 
  value: string | number; 
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <div className="flex items-center gap-1.5 text-muted-text uppercase tracking-eyebrow text-eyebrow font-bold">
        {Icon && <Icon size={12} />}
        {label}
      </div>
      <div className="text-body font-display font-bold text-ink">
        {value}
      </div>
    </div>
  );
}

export function StatusProgress({ 
  value, 
  max = 100, 
  variant = "signal" 
}: { 
  value: number; 
  max?: number; 
  variant?: "signal" | "lilac" | "indigo" | "success";
}) {
  const percentage = (value / max) * 100;
  const bars = [1, 2, 3, 4, 5];
  
  const colors = {
    signal: "bg-signal",
    lilac: "bg-lilac",
    indigo: "bg-indigo-brand",
    success: "bg-green-500",
  };

  return (
    <div className="flex gap-1 items-end h-4">
      {bars.map((bar, i) => (
        <div 
          key={i} 
          className={cn(
            "w-1 rounded-full transition-all duration-500",
            percentage >= (i + 1) * 20 ? colors[variant] : "bg-border-subtle"
          )}
          style={{ height: `${20 + (i * 20)}%` }}
        />
      ))}
    </div>
  );
}

export function Badge({ 
  children, 
  variant = "neutral" 
}: { 
  children: ReactNode; 
  variant?: "neutral" | "success" | "warning" | "error" | "info" | "indigo" | "violet" | "danger";
}) {
  const variants = {
    neutral: "bg-surface text-muted-text border-border-subtle",
    success: "bg-green-50 text-green-700 border-green-100",
    warning: "bg-amber-50 text-amber-700 border-amber-100",
    error: "bg-red-50 text-red-700 border-red-100",
    danger: "bg-red-50 text-danger border-red-100",
    info: "bg-blue-50 text-blue-700 border-blue-100",
    indigo: "bg-[#EEF2FF] text-[#4F46E5] border-[#E0E7FF]",
    violet: "bg-[#F5F3FF] text-[#8B5CF6] border-[#E9D5FF]",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2 py-0.5 rounded-badge border text-[11px] font-bold uppercase tracking-wider shadow-featured-icon",
      variants[variant]
    )}>
      {children}
    </span>
  );
}
