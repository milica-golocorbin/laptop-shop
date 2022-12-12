// COMPONENTS
import Main from "../layout/main/main";
import MainSection from "../layout/main/main-section";
import MainTitle from "../common/titles/main-title";
import MainButton from "../common/buttons/main-button";
// END OF IMPORTS

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
