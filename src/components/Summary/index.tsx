import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import Total from '../../assets/total.svg'

import { Container } from "./style";

export function Summary(){
    return(
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="" />
            </header>
            <strong>R$1000,00</strong>
        </div>
        <div>
            <header>
                <p>Saidas</p>
                <img src={outcomeImg} alt="" />
            </header>
            <strong>- R$ 500,00</strong>
        </div>
        <div className="highlight-background">
            <header>
                <p>Total</p>
                <img src={Total} alt="" />
            </header>
            <strong>R$ 500,00</strong>
        </div>
    </Container>
    )
}