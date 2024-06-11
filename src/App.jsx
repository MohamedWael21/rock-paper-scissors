import Choices from "./Choices";
import Footer from "./Footer";
import Header from "./Header";
import Waiting from "./Waiting";

const App = () => {
  return (
    <div className="w-5/6 max-w-5xl py-8 mx-auto flex flex-col justify-between h-full">
      <Header />
      {/* <Choices /> */}
      <Waiting />
      <Footer />
    </div>
  );
};
export default App;
