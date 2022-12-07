import Main from "../common/layout/main/main";
import MainTitle from "../common/titles/main-title";
import MainButton from "../common/buttons/main-button";
import MainSection from "../common/layout/main/main-section";

const NotFoundPage = () => {
  return (
    <Main>
      <MainSection>
        <div className="font-bold text-7xl mb-10 md:text-8xl 2xl:text-9xl">
          404
        </div>
        <MainTitle>The page you are looking for can not be found</MainTitle>
        <MainButton route="/">back to home</MainButton>
      </MainSection>
    </Main>
  );
};

export default NotFoundPage;
