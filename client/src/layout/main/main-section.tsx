type Props = {
  children: React.ReactNode;
};

const MainSection = ({ children }: Props) => {
  return (
    <section className="w-11/12 max-w-screen-2xl h-full mx-auto flex flex-col items-center">
      {children}
    </section>
  );
};

export default MainSection;
