import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.page.css'
import { useState } from 'react';

function CardPage() {
    const [isCardSelected, setIsCardSelected] = useState(false)

    const handleCardSelect = () => {
        setIsCardSelected(true);
    };

    return (
        <div className='card-form-container'>
            <h2>Método de Pagamento</h2>
            <form className='card-form'>
                <input type='radio' onClick={handleCardSelect}/>
                <label className="card-label">
                    <FontAwesomeIcon icon={faCreditCard} style={{fontSize:"20px", margin:"0 10px 0 10px"}}/>
                    <div>Cartão de crédito</div>
                </label>
            </form>
            {isCardSelected ? (
                <form className="card-body payment-card-body">
                    <span className="font-weight-normal card-text">Cartão de Crédito</span>
                    <div className="input">
                      <i className="fa fa-credit-card"></i>
                      <input type="text" className="form-control" placeholder="0000 0000 0000 0000" />
                    </div> 

                    <div className="row mt-3 mb-3">
                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">Data de Validade</span>
                        <div className="input">
                          <i className="fa fa-calendar"></i>
                          <input type="text" className="form-control" placeholder="MM/YY" />
                        </div> 
                      </div>

                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">Código de Segurança</span>
                        <div className="input">
                          <i className="fa fa-lock"></i>
                          <input type="text" className="form-control" placeholder="000" />
                        </div> 
                      </div>
                    </div>

                    <span className="font-weight-normal card-text">Nome no cartão</span>
                    <div className="input">
                      <i className="fa fa-credit-card"></i>
                      <input type="text" className="form-control" placeholder="Arthur A. da Silva" />
                    </div> 

                    <button type='submit' className='submit-button'>Finalizar pedido</button>
              </form>
            ) : (
            <></>
            )}
        </div>
    )
}

export default CardPage;