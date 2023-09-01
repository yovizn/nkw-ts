import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof ButtonClasses> {
  children: React.ReactNode;
  href: string;
}

const ButtonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-primary-gradient text-background hover:text-shadow hover:shadow-primaryShadow transition-colors",
      secondary: "",
      tertiary: "",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link href={href} className={ButtonClasses({ variant, size })}>
      {children}
    </Link>
  );
};
