import { useContext } from "react";
import { AppContext } from "./context";

export function useAppContext() {
  return useContext(AppContext)
}