import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content} from './styles'

export function Header(){
    const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setisNewTransactionModalOpen(true)
    }
    function handlecloseNewTransactionModal(){
        setisNewTransactionModalOpen(false)
        
    }

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova Transação
                </button>
                <Modal 
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={handlecloseNewTransactionModal}
                >

                </Modal>
            </Content>
        </Container>
    )
}