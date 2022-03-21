import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");
export function App() {
    const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
        useState(false);



    function handleOpenNewTransactionModal() {
        setisNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModal() {
        setisNewTransactionModalOpen(false);
    }
    return (
        <TransactionProvider>
            <Header onOpenNewTransactions={handleOpenNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle />
        </TransactionProvider>
    );
}
