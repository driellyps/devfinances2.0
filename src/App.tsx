import { useState } from 'react'
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { TransactionsProvider } from "./hooks/useTransactions"

export function App() {
  const [showTransactionModal, setShowTransactionModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setShowTransactionModal(true)
  }

  function handleCloseNewTransactionModal() {
    setShowTransactionModal(false)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal isOpen={showTransactionModal} onRequestClose={handleCloseNewTransactionModal} />
      <Dashboard />
    </TransactionsProvider>
  );
}
