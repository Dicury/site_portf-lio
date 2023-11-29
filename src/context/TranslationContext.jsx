"use client";

import { createContext, useState } from "react";
import global_pt_BR from "@/translations/ptBR/global_pt_BR.json";
import global_en from "@/translations/en/global_en.json";

export const TranslationContext = createContext();
TranslationContext.displayName = "Translation";

export const TranslationContextProvider = ({ children }) => {
  const [traducaoBR, setTraducaoBR] = useState(global_pt_BR);
  const [traducaoEN, setTraducaoEN] = useState(global_en);
  const [linguaAtual, setLinguaAtual] = useState(traducaoBR);

  const MudaLingua = () => {
    if (linguaAtual === traducaoBR) {
      setLinguaAtual(traducaoEN);
    } else {
      setLinguaAtual(traducaoBR);
    }
  };

  return (
    <TranslationContext.Provider
      value={{ traducaoBR, traducaoEN, linguaAtual, MudaLingua }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
