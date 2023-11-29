import { useContext } from "react";
import { TranslationContext } from "@/context/TranslationContext";

export default function useTranslationContext() {
  const context = useContext(TranslationContext);

  if (context === undefined) {
    throw new Error("Não está dentro do contexto");
  }

  return context;
}
