import Choices from "./Choices";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  return (
    <div className="w-5/6 max-w-5xl py-8 mx-auto ">
      <Header />
      <Choices />
      <Footer />
    </div>
  );
};
export default App;
