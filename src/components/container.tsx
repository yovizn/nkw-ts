export const Container = ({
  children,
  className,
  ref,
}: {
  children?: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={ref} className={`max-w-[120rem] mx-auto px-8 ${className}`}>{children}</div>
  );
};
