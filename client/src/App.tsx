import { useContext } from "react";
import AppRoutes from "./routes/app-routes";
import { UserContext, UserCtxProps } from "./global/context/user-context";
// COMPONENTS
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import Loading from "./layout/loading/loading";
// END OF IMPORTS

const App = () => {
  // react-query-firebase global state
  const { user } = useContext(UserContext) as UserCtxProps;

  if (user.isLoading) {
    return (
      <div className="flex flex-col items-center justify-between max-w-screen min-h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-between max-w-screen min-h-screen">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
