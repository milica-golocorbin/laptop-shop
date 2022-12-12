type Props = {
  children: React.ReactNode;
};

const MainTitle = ({ children }: Props) => {
  return (
    <h1 className="font-bold text-center tracking-wider text-2xl mb-10 sm:text-3xl 2xl:text-4xl">
      {children}
    </h1>
  );
};

export default MainTitle;
