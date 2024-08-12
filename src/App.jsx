import imgFondo from "/hero_img.jpg";
import CreateIcon from "@mui/icons-material/Create";
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
      <p className="text-borderTextArea md:absolute md:bottom-0 md:right-0 md:left-0 w-full pb-4 text-center md:mb-10 md:flex md:justify-center md:items-center">
        <CreateIcon></CreateIcon>Created by Francisco Javier Paredes
      </p>
    </div>
  );
}

export default App;
