import React, { PropsWithChildren, useState } from 'react'
import { AppContext } from './context'

const AppProvider = ({ children }: PropsWithChildren) => {
  const [selectedVideoId, setSelectedVideo] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = (id: string) => {
    setIsModalOpen(true)
    setSelectedVideo(id)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <AppContext.Provider value={{ isModalOpen, selectedVideoId, openModal: handleOpen, closeModal: handleClose }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider