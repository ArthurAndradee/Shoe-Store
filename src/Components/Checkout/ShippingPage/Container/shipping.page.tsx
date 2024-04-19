import { useState } from 'react';
import { useForm } from "react-hook-form"
import './shipping.page.css'

function ShippingPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const {register, setFocus, setValue, handleSubmit} = useForm()

    const handleCreateAddressModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const onSubmit = (e: Object) => {
        console.log(e)
    }

    //METHODS TO HANDLE INPUT CHANGES
    //ADDRESS NUMBER
    const [addressNumber, setaAdressNumber] = useState('')
    const handleChangeAddressNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (/^\d*$/.test(event.target.value)) {
          setaAdressNumber(event.target.value);
        }
    };

    //PHONE NUMBER
    const [phoneNumber, setPhoneNumber] = useState('');
    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = (event.target.value).replace(/\D/g, '')
        .replace(/^(\(\d{2}\)) (\d{5})/, '$1 $2-') 
        .replace(/(\d{2})\s?(\d{5})\s?(\d{4})/, '$1 $2-$3'); 
   
          setPhoneNumber(formattedValue);
    };

    //CEP
    const [CEP, setCEP] = useState('');
    const HandleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = (event.target.value).replace(/\D/g, '')
        .replace(/(\d{5})(\d+)/, '$1-$2'); 
   
        setCEP(formattedValue);
    };

    //CPF
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

    //CEP API
    const checkCEP = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value) {
            const cep = e.target.value.replace(/\D/g,'')
            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
                setValue('cep', data.cep)
                setValue('address', data.logradouro)
                setValue('neighbourhood', data.bairro)
                setValue('city', data.localidade)
                setValue('uf', data.uf)
                setFocus('addressNumber')
            })
            .catch((err) => console.log(err));
        }
    }

    return(
        <div>
            <div className='add-adress-button' onClick={handleCreateAddressModal}>Adicionar endereço {modalIsOpen? ( <>-</>) : (<>+</>)}</div>
            {modalIsOpen ? (
                <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
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
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("cep")} value={CEP} onChange={HandleCepChange} maxLength={9} onBlur={checkCEP}/>
                            <h4 className='fs-6'>Endereço</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("address")}/>
                        </div>
                        <div className='input-group'>
                            <h4 className='fs-6'>Número</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("addressNumber")} value={addressNumber} onChange={handleChangeAddressNumber}/>
                            <h4 className='fs-6'>Complemento</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text"/>
                            <h4 className='fs-6'>Bairro</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("neighbourhood")}/>
                            <h4 className='fs-6'>Cidade</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("city")}/>
                            <h4 className='fs-6'>Estado</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("uf")}/>
                            <h4 className='fs-6'>País</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" value={"Brasil"}/>
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <button className='handle-form-button' type='submit'>Enviar aqui</button>
                        <div className='handle-form-button mx-3' onClick={handleCreateAddressModal}>Cancelar</div>
                    </div>
                </form>
            ) : (
                <></>
            )}
        </div>
    )
}

export default ShippingPage;