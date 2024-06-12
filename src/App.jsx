import { useAppContext } from "./AppContext";
import Choices from "./Choices";
import Footer from "./Footer";
import Header from "./Header";
import PlayedMoves from "./PlayedMoves";
import Report from "./Report";

const App = () => {
  const { isPlayerPlayed, isGameFinish } = useAppContext();
  return (
    <div className="w-5/6 max-w-5xl py-8 mx-auto flex flex-col justify-between h-full">
      <Header />
      {!isPlayerPlayed && <Choices />}
      {isPlayerPlayed && <PlayedMoves />}
      {isGameFinish && <Report />}
      <Footer />
    </div>
  );
};
export default App;
