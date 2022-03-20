import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModal) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlaay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Transaction</h2>

                <input placeholder="Título" />

                <input type="number" placeholder="Valor" />

                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
