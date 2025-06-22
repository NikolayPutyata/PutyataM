import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import DrawerMenu from "./components/DrawerMenu.jsx";
import "./index.css";

function App() {
  return (
    <div className="font-sans text-black bg-white">
      <div className="drawer drawer-end">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header />
          <Main />
          <Footer />
        </div>
        <DrawerMenu />
      </div>
    </div>
  );
}

export default App;
