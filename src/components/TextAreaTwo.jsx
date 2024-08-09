import React, { useRef, useState } from "react";
import Textarea from "@mui/joy/Textarea";
import Accordion from "@mui/material/Accordion";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import { useStore } from "../store";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

export default function TextAreaTwo({ primer }) {
  const [openNoti, setOpenNoti] = useState(false);
  const {
    btnActual,
    btnActualTwo,
    paraTraducir,
    traduccion,
    setBtnActual,
    setBtnActualTwo,
    setParaTraducir,
    setTraduccion,
  } = useStore();
  const textAreaRef = useRef(null);

  const handleCopy = async () => {
    if (textAreaRef.current) {
      try {
        // Copiar el contenido al portapapeles usando la Clipboard API
        await navigator.clipboard.writeText(traduccion);
        setOpenNoti(true);
      } catch (error) {
        console.error("Error al copiar el texto: ", error);
      }
    }
  };

  const handleClick = (idio) => {
    setBtnActualTwo(idio);
  };
  const changeTranslate = () => {
    setBtnActual(btnActualTwo);
    setBtnActualTwo(btnActual);
    setParaTraducir(traduccion);
    setTraduccion(paraTraducir);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenNoti(false);
  };
  const idiomas = [
    { lengua: "English", abreviatura: "en" },
    { lengua: "Spanish", abreviatura: "es" },
    { lengua: "French", abreviatura: "fr" },
    { lengua: "German", abreviatura: "de" },
    { lengua: "Italian", abreviatura: "it" },
    { lengua: "Portuguese", abreviatura: "pt" },
    { lengua: "Russian", abreviatura: "ru" },
    { lengua: "Chinese", abreviatura: "zh" },
    { lengua: "Japanese", abreviatura: "ja" },
    { lengua: "Korean", abreviatura: "ko" },
    { lengua: "Arabic", abreviatura: "ar" },
    { lengua: "Hindi", abreviatura: "hi" },
    { lengua: "Bengali", abreviatura: "bn" },
    { lengua: "Persian", abreviatura: "fa" },
    { lengua: "Turkish", abreviatura: "tr" },
  ];

  return (
    <div
      className={`flex flex-col gap-3 ${
        primer ? `bg-fondoPrimerText` : `bg-fondoSegundoText`
      } border border-borderTextArea rounded-md p-3  md:w-1/3`}
    >
      <div className="flex flex-wrap gap-2 justify-between">
        {idiomas.slice(0, 4).map((idio, index) => (
          <Button
            sx={{ color: "white" }}
            key={index}
            onClick={() => handleClick(idio)}
            size="small"
            variant={
              btnActualTwo.abreviatura === idio.abreviatura
                ? `contained`
                : `outlined`
            }
            className="bg-fondoBtnSele text-white p-1 rounded-lg font-medium"
          >
            {idio.lengua}
          </Button>
        ))}
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
                ["en", "es", "fr", "de"].includes(btnActualTwo.abreviatura)
                  ? `outlined`
                  : `contained`
              }
              className="bg-fondoBtnSele text-white p-1 rounded-lg font-medium"
            >
              {["en", "es", "fr", "de"].includes(btnActualTwo.abreviatura)
                ? "Italian"
                : btnActualTwo.lengua}
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
            {idiomas.slice(4, idiomas.length).map((idio, index) => (
              <Button
                sx={{ color: "white" }}
                key={index}
                onClick={() => handleClick(idio)}
                size="small"
                variant={
                  btnActualTwo.abreviatura === idio.abreviatura
                    ? `contained`
                    : `outlined`
                }
                className="bg-fondoBtnSele text-white p-1 rounded-lg font-medium"
              >
                {idio.lengua}
              </Button>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
      <Textarea
        ref={textAreaRef}
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.1)",
          marginBottom: "10px",
          color: "white",
          fontWeight: "500",
          "&:hover": {
            color: "white",
          },
          "&:focus": {
            color: "white",
          },
        }}
        disabled
        minRows={3}
        size="md"
        variant="plain"
        value={traduccion}
      />
      <div className="flex justify-between md:pt-0">
        <ContentCopyOutlinedIcon
          onClick={handleCopy}
          sx={{ cursor: "pointer" }}
          fontSize="medium"
          color="primary"
        />
        <ChangeCircleOutlinedIcon
          onClick={changeTranslate}
          sx={{ cursor: "pointer", color: "gray" }}
          fontSize="medium"
        />
      </div>
      <Snackbar open={openNoti} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="standard"
          sx={{ width: "100%" }}
        >
          text copied successfully !
        </Alert>
      </Snackbar>
    </div>
  );
}
