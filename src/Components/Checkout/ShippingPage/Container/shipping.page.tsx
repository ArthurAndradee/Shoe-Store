import { useState } from 'react';
import './shipping.page.css'

function ShippingPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleShippingClick = () => {
        setModalIsOpen(!modalIsOpen);
    };

    //METHOS TO HANDLE INPUT CHANGES
    
    const [numberValue, setNumberValue] = useState('')
    const handleChangeNumberValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (/^\d*$/.test(event.target.value)) {
          setNumberValue(event.target.value);
        }
    };

    const [phoneNumber, setPhoneNumber] = useState('');
    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = (event.target.value).replace(/\D/g, '')
        .replace(/^(\(\d{2}\)) (\d{5})/, '$1 $2-') 
        .replace(/(\d{2})\s?(\d{5})\s?(\d{4})/, '$1 $2-$3'); 
   
          setPhoneNumber(formattedValue);
    };

    const [CEP, setCEP] = useState('');
    const HandleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = (event.target.value).replace(/\D/g, '')
        .replace(/(\d{5})(\d+)/, '$1-$2'); 
   
        setCEP(formattedValue);
    };

    const [CPF, setCPF] = useState('');
    const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        
        const numericValue = inputValue.replace(/\D/g, '');

        let formatted = '';
        for (let i = 0; i < numericValue.length; i++) {
          if (i % 3 === 0 && i !== 0 && i !== numericValue.length - 2) {
            formatted += '.';
          } else if (i === numericValue.length - 2) {
            formatted += '-';
          }
          formatted += numericValue[i];
        }

        setCPF(formatted);
    };

    return(
        <div>
            <div className='add-adress-button' onClick={handleShippingClick}>Adicionar endereço {modalIsOpen? ( <>-</>) : (<>+</>)}</div>
            {modalIsOpen ? (
                <form className='form-group'>
                    <div className='form-container'>
                        <div className='input-group'>
                            <h4 className='fs-6'>Nome</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text"/>
                            <h4 className='fs-6'>Sobrenome</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text"/>
                            <h4 className='fs-6'>Número de telefone</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" value={phoneNumber} onChange={handlePhoneNumberChange} maxLength={13}/>
                            <h4 className='fs-6'>CPF</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" value={CPF} onChange={handleCPFChange} maxLength={15}/>
                            <h4 className='fs-6'>CEP</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" value={CEP} onChange={HandleCepChange} maxLength={9}/>
                            <h4 className='fs-6'>Endereço</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text"/>
                        </div>
                        <div className='input-group'>
                            <h4 className='fs-6'>Número</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" value={numberValue} onChange={handleChangeNumberValue}/>
                            <h4 className='fs-6'>Complemento</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text"/>
                            <h4 className='fs-6'>Bairro</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text"/>
                            <h4 className='fs-6'>Cidade</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text"/>
                            <h4 className='fs-6'>Estado</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text"/>
                            <h4 className='fs-6'>País</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text"/>
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <div className='handle-form-button' onClick={handleShippingClick}>Enviar aqui</div>
                        <div className='handle-form-button mx-3' onClick={handleShippingClick}>Cancelar</div>
                    </div>
                </form>
            ) : (
                <></>
            )}
        </div>
    )
}

export default ShippingPage;