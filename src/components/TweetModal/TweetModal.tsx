import { createPortal } from "react-dom"
import { SyntheticEvent, useEffect } from "react"
import { TweetTextarea } from "../TweetTextarea/TweetTextarea"
import { Button, Container, Modal } from "./styled"

export interface ITweetModalProps {
  closeModal: () => void
}

export const TweetModal = ({ closeModal }: ITweetModalProps) => {
  const handleClose = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [closeModal])
  return createPortal(
    <Container onClick={handleClose}>
      <Modal>
        <TweetTextarea closeModal={closeModal} />
        <Button onClick={closeModal}>x</Button>
      </Modal>
    </Container>,
    document.body,
  )
}
