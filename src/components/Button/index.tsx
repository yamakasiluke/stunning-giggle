import React from "react";

const shapes = {
  CustomBorderLR5:
    "rounded-bl-none rounded-br-[5px] rounded-tl-none rounded-tr-[5px]",
  RoundedBorder12: "rounded-[12px]",
  icbRoundedBorder12: "rounded-[12px]",
} as const;
const variants = {
  FillLightblue800: "bg-light_blue_800 text-white_A700",
  OutlineBluegray600:
    "bg-blue_50 border border-blue_gray_600 border-solid text-blue_gray_600",
  OutlineBluegray9004c:
    "bg-gray_100_01 border border-blue_gray_900_4c border-solid text-gray_700",
  icbOutlineIndigo3001e: "bg-white_A700 shadow-bs",
} as const;
const sizes = { sm: "p-1.5", md: "p-3", lg: "p-4", smIcn: "p-2.5" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "",
  size = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
