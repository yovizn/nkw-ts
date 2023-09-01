type HeroProps = {
  children: React.ReactNode;
};

type HeroElementProps = {
  children: React.ReactNode;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center pt-[var(--navigation-height)]">{children}</div>;
};

export const HeroTitle = ({ children }: HeroElementProps) => {
  return <h1 className="text-3xl md:text-5xl my-6">{children}</h1>;
};

export const HeroSubTitle = ({ children }: HeroElementProps) => {
  return <p className="text-lg mb-12">{children}</p>;
};
