import React, { useState, useEffect } from 'react';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './card.page.css';

export interface Order {
  payment: Record<string, any>;
  products: Record<string, any>;
  shippingAdress: Record<string, any>;
}

function CardPage() {
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [safetyCode, setSafetyCode] = useState('');
  const [cardOwner, setCardOwner] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    setIsFormFilled(
      cardNumber.length === 19 &&
      expiryDate.length === 5 &&
      safetyCode.length === 3 &&
      cardOwner.trim().length > 0
    );
  }, [cardNumber, cardOwner, expiryDate, safetyCode]);
  
  const saveCardInformation = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    
    if(isFormFilled) {
      const cardData = {
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        safetyCode: safetyCode,
        cardOwner: cardOwner
      };
      
      localStorage.setItem("cardData", JSON.stringify(cardData))
    } else {
      setWarning(true)
    }
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.key;
    console.log(cardOwner)
    
    if (/^[a-zA-Z\sáéíóúâêîôûàèìòùãẽĩõũäëïöüÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙÃẼĨÕŨÄËÏÖÜçÇ]$/.test(charCode) || charCode === "Backspace") {
      if (charCode !== "Backspace") {
        setCardOwner(prevValue => prevValue + charCode);
      } else if (cardOwner.length > 0) {
        setCardOwner(prevValue => prevValue.slice(0, -1));
      }
    } else {
      event.preventDefault();
    }};
    
  const handleExpiryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let formattedValue = inputValue.replace(/\D/g, '').slice(0, 4);
    
    if (formattedValue.length > 2) {
      formattedValue = formattedValue.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    }
    
    setExpiryDate(formattedValue);
  };
  
  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = event.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formattedNumber);
  };
    
  const handleSafetyCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.replace(/\D/g, '');
    
    setSafetyCode(formattedValue);
  };

  const handleCardSelect = () => {
    setIsCardSelected(true);
  };
    
    return (
      <div className='card-form-container'>
      <h2>Método de Pagamento</h2>
      <form className='card-form'>
        <input type='radio' onClick={handleCardSelect} />
        <label className='card-label'>
          <FontAwesomeIcon icon={faCreditCard} style={{ fontSize: '20px', margin: '0 10px 0 10px' }} />
          <div>Cartão de crédito</div>
        </label>
      </form>
      {isCardSelected ? (
        <form className='card-body payment-card-body'>
          <span className='font-weight-normal card-text'>Cartão de Crédito</span>
          <div className='input'>
            <i className='fa fa-credit-card'></i>
            <input
              type='text'
              className='form-control'
              placeholder='0000 0000 0000 0000'
              required
              maxLength={19}
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>

          <div className='row mt-3 mb-3'>
            <div className='col-md-6'>
              <span className='font-weight-normal card-text'>Data de Validade</span>
              <div className='input'>
                <i className='fa fa-calendar'></i>
                <input
                  type='text'
                  className='form-control'
                  placeholder='MM/YY'
                  required
                  maxLength={5}
                  value={expiryDate}
                  onChange={handleExpiryChange}
                />
              </div>
            </div>

            <div className='col-md-6'>
              <span className='font-weight-normal card-text'>Código de Segurança</span>
              <div className='input'>
                <i className='fa fa-lock'></i>
                <input
                  type='text'
                  className='form-control'
                  placeholder='000'
                  required
                  maxLength={3}
                  value={safetyCode}
                  onChange={handleSafetyCodeChange}
                />
              </div>
            </div>
          </div>

          <span className='font-weight-normal card-text'>Nome no cartão</span>
          <div className='input'>
            <i className='fa fa-credit-card'></i>
            <input type='text' className='form-control' placeholder='Arthur A. da Silva' required maxLength={100} onKeyDown={handleKeyDown} />
          </div>
          {warning && (
            <div className='text-danger'>Por favor preencha todos os campos</div>
          )}
          <button type='submit' className='submit-button' onClick={saveCardInformation}>
            <Link to={'/order-review'} style={{textDecoration:'none', color:'#FFFFFF'}}>
              Finalizar pedido
            </Link>
          </button>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CardPage;
