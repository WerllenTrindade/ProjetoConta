import Modal from 'react-modal'

import { Container } from './style'
import { TransactionTypeContainer, RadioBox } from './style'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'

type NewTransctionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void; // retorno dessa função e vazio
}

export function NewTransctionModal({isOpen, onRequestClose}:NewTransctionModalProps ){
  const [type, setType] = useState('deposit');

  return(
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
    
    <button type="button" 
    onClick={onRequestClose} 
    className="react-modal-closed">
      <img src={closeImg} alt="" />
    </button>

    <Container>
    <h2>Cadastrar Transação</h2>

    <input
     placeholder="Titulo"/>

    <input
    type='number'
    placeholder="Valor"/>

    <TransactionTypeContainer>
    <RadioBox
    type="button"
     // className={type === 'deposit' ? 'active' : ''}
    onClick={() => {setType('deposit')}}
    isActive={type === 'deposit'}
    >
      <img src={incomeImg} alt="Entrada" />
      <span>Entrada</span>
    </RadioBox>

    <RadioBox 
    type="button"
    // className={type === 'withdraw' ? 'active' : ''}
    onClick={() => {setType('withdraw')}}
    isActive={type === 'withdraw'}
    >
      <img src={outcomeImg} alt="Saida" />
      <span>Saida</span>
    </RadioBox>
    </TransactionTypeContainer>

    <input placeholder="Categoria" />

    <button type="submit">
      Cadastrar
    </button>
    </Container>
    </Modal>
  )
}