import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-8xl",
  h2: "sm:text-2xl md:text-[26px] text-[28px]",
  h3: "font-normal text-2xl md:text-[22px] sm:text-xl",
  h4: "font-medium text-xl",
  h5: "font-bold text-lg",
  h6: "text-base",
  body1: "text-sm",
  body2: "font-normal text-[13px]",
  body3: "text-xs",
  body4: "font-bold text-[10px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
