import { useState } from 'react'
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"

Modal.setAppElement('#root');

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
      <Modal
        isOpen={showTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Create New Transaction</h2>
      </Modal>
      <Dashboard />
    </>
  );
}
