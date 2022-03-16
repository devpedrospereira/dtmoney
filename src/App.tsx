import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";

export function App() {
    const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {
        setisNewTransactionModalOpen(true);
    }
    function handlecloseNewTransactionModal() {
        setisNewTransactionModalOpen(false);
    }
    return (
        <>
            <Header onOpenNewTransactions={handleOpenNewTransactionModal}/>
            <Modal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handlecloseNewTransactionModal}
            ></Modal>
            <Dashboard />
            <GlobalStyle />
        </>
    );
}
