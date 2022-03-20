import Modal from "react-modal";

interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModal) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h1>Cadastrar Transaction</h1>
        </Modal>
    );
}
