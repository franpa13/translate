import imgFondo from "/hero_img.jpg";
import imgTranslate from "/logo.svg";
import ContainersText from "./components/ContainersText";
import "./App.css";

function App() {
  return (
    <div className="bg-fondoHome md: min-h-screen">
      <section>
        <div className="h-44 relative">
          <img className="absolute top-0 md:w-full" src={imgFondo} alt="" />
        </div>
        <div className="flex justify-center items-center w-full">
          <img
            src={imgTranslate}
            className="text-wh absolute top-6 font-semibold text-2xl"
            alt=""
          />
        </div>
      </section>
      <ContainersText></ContainersText>
    </div>
  );
}

export default App;
