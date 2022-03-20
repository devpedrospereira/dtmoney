import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";

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
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
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
