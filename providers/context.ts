import { createContext } from "react"

type AppContext = {
  isModalOpen?: boolean,
  openModal?: (id:string) => void,
  selectedVideoId?: string
  closeModal?: () => void
}

export const AppContext = createContext<AppContext>({})