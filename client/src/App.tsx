import AppRoutes from "./routes/app-routes";
import Header from "./common/layout/header/header";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen overflow-hidden">
      <Header />
      <AppRoutes />
    </div>
  );
};
export default App;
