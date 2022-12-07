import AppRoutes from "./routes/app-routes";
import Header from "./common/layout/header/header";
import Footer from "./common/layout/footer/footer";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-between max-w-screen min-h-screen">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};
export default App;
