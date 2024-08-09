import React from "react";
import { useState, useRef } from "react";
import Textarea from "@mui/joy/Textarea";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

import Accordion from "@mui/material/Accordion";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { useStore } from "../store";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Select } from "@mui/base/Select";
import { Button } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import axios from "axios";
export default function TextArea({ primer }) {
  const [openError, setOpenError] = useState(false);
  const [openCopy, setOpenCopy] = useState(false);
  const [openErrorResponse, setOpenEerrorResponse] = useState(false);
  const {
    btnActual,
    setBtnActual,
    paraTraducir,
    setParaTraducir,
    traduccion,
    setTraduccion,
    btnActualTwo,
  } = useStore();

  const maxChar = 500;
  const idiomas = [
    {
      lengua: "English",
      abreviatura: "en",
    },
    {
      lengua: "Spanish",
      abreviatura: "es",
    },
    {
      lengua: "French",
      abreviatura: "fr",
    },
    {
      lengua: "German",
      abreviatura: "de",
    },
    {
      lengua: "Italian",
      abreviatura: "it",
    },
    {
      lengua: "Portuguese",
      abreviatura: "pt",
    },
    {
      lengua: "Russian",
      abreviatura: "ru",
    },
    {
      lengua: "Chinese",
      abreviatura: "zh",
    },
    {
      lengua: "Japanese",
      abreviatura: "ja",
    },
    {
      lengua: "Korean",
      abreviatura: "ko",
    },
    {
      lengua: "Arabic",
      abreviatura: "ar",
    },
    {
      lengua: "Hindi",
      abreviatura: "hi",
    },
    {
      lengua: "Bengali",
      abreviatura: "bn",
    },
    {
      lengua: "Persian",
      abreviatura: "fa",
    },
    {
      lengua: "Turkish",
      abreviatura: "tr",
    },
  ];
  const handleClick = (idio) => {
    setBtnActual(idio);
  };
  const handleChange = (e) => {
    console.log(e.target.value.length, "tramaño");

    if (e.target.value.length <= 500) {
      setParaTraducir(e.target.value);
    } else {
      console.log("holaaaa");
    }
  };
  const textAreaRef = useRef(null);
  const handleCopy = async () => {
    if (textAreaRef.current) {
      try {
        await navigator.clipboard.writeText(paraTraducir);
        setOpenCopy(true);
      } catch (error) {
        console.error("Error al copiar el texto: ", error);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const traerTraduccion = async () => {
        const response = await axios.get(
          `https://api.mymemory.translated.net/get?q=${paraTraducir}&langpair=${btnActual.abreviatura}|${btnActualTwo.abreviatura}`
        );
        console.log(response, "esto es la resp");
        if (response.status == 200) {
          if (response.data.responseStatus == 200) {
            let traduccionFinal = response.data.responseData.translatedText;
            setTraduccion(traduccionFinal);
            return;
          } else if (
            response.data.responseDetails ==
            "PLEASE SELECT TWO DISTINCT LANGUAGES"
          ) {
            setOpenEerrorResponse(true);
            return;
          } else {
            setOpenError(true);
          }
        }
      };
      traerTraduccion();
    } catch (e) {
      console.log(e);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
    setOpenCopy(false);
    setOpenEerrorResponse(false);
  };
  // const action = (
  //   <React.Fragment>
  //     <IconButton
  //       size="small"
  //       aria-label="close"
  //       color="primary"
  //       onClick={handleClose}
  //     >
  //       <CloseIcon fontSize="small" />
  //     </IconButton>
  //   </React.Fragment>
  // );
  return (
    <div
      className={`flex flex-col gap-3 ${
        primer ? `bg-fondoPrimerText` : `bg-fondoSegundoText`
      } border border-borderTextArea rounded-md p-3 md:w-1/3`}
    >
      <div className="flex flex-wrap gap-2 justify-between">
        {idiomas.slice(0, 4).map((idio, index) => {
          return (
            <Button
              sx={{ color: "white" }}
              key={index}
              onClick={() => handleClick(idio)}
              size="small"
              variant={
                btnActual.abreviatura == idio.abreviatura
                  ? `contained`
                  : `outlined`
              }
              className=" bg-fondoBtnSele text-white p-1 rounded-lg font-medium"
            >
              {idio.lengua}
            </Button>
          );
        })}
        <Accordion sx={{ bgcolor: "rgba(77, 85, 98, 0.2)", padding: "0px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="info" fontSize="10px" />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ color: "white" }}
          >
            <Button
              sx={{ color: "white" }}
              size="small"
              variant={
                btnActual.abreviatura == "en" ||
                btnActual.abreviatura == "es" ||
                btnActual.abreviatura == "fr" ||
                btnActual.abreviatura == "de"
                  ? `outlined`
                  : `contained`
              }
              className=" bg-fondoBtnSele text-white p-1 rounded-lg font-medium"
            >
              {btnActual.abreviatura == "en" ||
              btnActual.abreviatura == "es" ||
              btnActual.abreviatura == "fr" ||
              btnActual.abreviatura == "de"
                ? "Italian"
                : btnActual.lengua}
            </Button>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "start",
              gap: "10px",
            }}
          >
            {idiomas.slice(4, idiomas.length).map((idio, index) => {
              return (
                <Button
                  sx={{ color: "white" }}
                  key={index}
                  onClick={() => handleClick(idio)}
                  size="small"
                  variant={
                    btnActual.abreviatura == idio.abreviatura
                      ? `contained`
                      : `outlined`
                  }
                  className=" bg-fondoBtnSele text-white p-1 rounded-lg font-medium"
                >
                  {idio.lengua}
                </Button>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
      <Textarea
        ref={textAreaRef}
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.1)",
          color: "white",
          fontWeight: "500",
          "&:hover": {
            color: "white",
          },
          "&:focus": {
            color: "white",
          },
        }}
        onChange={handleChange}
        minRows={2}
        size="md"
        variant="plain"
        placeholder="type a text..."
        value={paraTraducir}
      />
      <form className="flex justify-between items-end" onSubmit={handleSubmit}>
        <ContentCopyOutlinedIcon
          onClick={handleCopy}
          sx={{ cursor: "pointer" }}
          fontSize="medium"
          color="primary"
        />
        <div className="flex flex-col justify-around items-end gap-1 ">
          <span className="text-gray-500 font-semibold">
            {paraTraducir.length}/{maxChar}
          </span>
          <Button
            size="small"
            startIcon={<TranslateIcon />}
            variant="contained"
            type="submit"
          >
            Translate
          </Button>
        </div>
      </form>
      <Snackbar
        open={openError}
        autoHideDuration={4000}
        onClose={handleClose}
 
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Add a word please !
        </Alert>
      </Snackbar>

      <Snackbar
        open={openCopy}
        autoHideDuration={4000}
        onClose={handleClose}
    
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="standard"
          sx={{ width: "100%" }}
        >
          text copied successfully !
        </Alert>
      </Snackbar>

      <Snackbar
        open={openErrorResponse}
        autoHideDuration={4000}
        onClose={handleClose}
      
      >
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="standard"
          sx={{ width: "100%" }}
        >
          Add two languages differents please!
        </Alert>
      </Snackbar>
    </div>
  );
}
