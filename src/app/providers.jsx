"use client";
import { GlobalStyles } from "@/tokens/globalStyles";

export function Providers({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
