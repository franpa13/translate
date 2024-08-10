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
      <p className="text-borderTextArea absolute bottom-0 right-0 left-0 text-center mb-40 md:mb-10 flex justify-center items-center">
        <CreateIcon></CreateIcon>Created by Francisco Paredes
      </p>
    </div>
  );
}

export default App;
