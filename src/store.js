import { create } from "zustand";

export const useStore = create((set) => ({
  btnActual: {
    lengua: "English",
    abreviatura: "en",
  },
  btnActualTwo: {
    lengua: "Spanish",
    abreviatura: "es",
  },
  paraTraducir: "",
  traduccion: "",
  setBtnActual: (idio) => set({ btnActual: idio }),
  setBtnActualTwo: (idio) => set({ btnActualTwo: idio }),
  setParaTraducir: (value) => set({ paraTraducir: value }),
  setTraduccion: (response) => set({ traduccion: response }),
}));
