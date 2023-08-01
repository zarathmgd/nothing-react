import { Provider } from "react-redux";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/Secondpage";
import Thirdpage from "./components/Thirdpage";
import { store } from "./components/redux";
import Fourthpage from "./components/Fourthpage";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <Firstpage />
          <Cart />
          <Secondpage />
          <Thirdpage />
          <Fourthpage />
          <Footer />
        </Provider>
      </div>
    </>
  );
}

export default App;
