import { useState } from 'react'
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { NewTransactionModal } from "./components/NewTransactionModal"

export function App() {
  const [showTransactionModal, setShowTransactionModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setShowTransactionModal(true)
  }

  function handleCloseNewTransactionModal() {
    setShowTransactionModal(false)
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal isOpen={showTransactionModal} onRequestClose={handleCloseNewTransactionModal} />
      <Dashboard />
    </>
  );
}
