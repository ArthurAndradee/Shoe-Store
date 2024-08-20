import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { useLocalStorage } from '../../../Context/context';
import { v4 } from 'uuid';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './shipping.page.css'

export interface DestinationInfo {
    destinationId: string
    destinationName: string
    destinationSurname: string
    phoneNumber: string
    cpf: string
    cep: string
    address: string
    addressNumber: string
    addressInfo: string
    neighbourhood: string
    city: string
    uf: string
}

interface ShippingProps extends DestinationInfo {
    handleStateChange: (addressSelected: boolean) => void;
}

function ShippingPage(props: ShippingProps) {
    const { handleAddDestination, handleRemoveDestination, destinations } = useLocalStorage();
    const { register, setValue, handleSubmit } = useForm();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectWarning, setSelectWarning] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState<DestinationInfo | null>(null);

    useEffect(() => {
        const savedDestinationId = localStorage.getItem('selectedDestinationId');
        if (savedDestinationId) {
            const savedDestination = destinations?.find(dest => dest.destinationId === savedDestinationId) || null;
            setSelectedDestination(savedDestination);
        } else {
            setSelectedDestination(null);
        }
    }, [destinations]);

    const handleDestinationClick = (destination: DestinationInfo) => {
        setSelectedDestination(destination);
        localStorage.setItem('selectedDestinationId', destination.destinationId);
    };

    const handleDeleteSelectedDestination = (destination: DestinationInfo) => {
        handleRemoveDestination(destination);
        if (selectedDestination === destination) {
            localStorage.removeItem('selectedDestinationId');
            setSelectedDestination(destinations && destinations.length > 0 ? destinations[0] : null);
        }
    };

    const toggleCreateAccessModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const advanceToNextPage = () => {
        if (selectedDestination) {
            props.handleStateChange(true);
        } else {
            props.handleStateChange(false);
            setSelectWarning(true);
        }
    };
    
    //METHODS TO HANDLE INPUT CHANGES
    
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('');
    const [CPF, setCPF] = useState('');
    const [CEP, setCEP] = useState('');
    const [address, setAddress] = useState('')
    const [addressNumber, setAddressNumber] = useState('')
    const [neighbourhood, setNeighbourhood] = useState('')
    const [addressInfo, setAddressInfo] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleChangeSurName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSurName(event.target.value);
    };
  
    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = (event.target.value).replace(/\D/g, '')
        .replace(/^(\(\d{2}\)) (\d{5})/, '$1 $2-') 
        .replace(/(\d{2})\s?(\d{5})\s?(\d{4})/, '$1 $2-$3'); 
        
        setPhoneNumber(formattedValue);
    };
        
    const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        
        const numericValue = inputValue.replace(/\D/g, '');
        
        //TODO: Break formatted for loop in separate function
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
    
    //CEP
    const HandleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = (event.target.value).replace(/\D/g, '')
        .replace(/(\d{5})(\d+)/, '$1-$2'); 
        
        setCEP(formattedValue);
    };
    
    //CEP API
    const checkCEP = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value) {
            const cep = e.target.value.replace(/\D/g,'')
            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {    
                //SET VALUES FOR INPUT TAGS
                setValue('name', name)
                setValue('surname', surName)
                setValue('phoneNumber', phoneNumber)
                setValue('cpf', CPF)
                setValue('cep', data.cep)
                setValue('address', data.logradouro)
                setValue('neighbourhood', data.bairro)
                setValue('city', data.localidade)
                setValue('uf', data.uf)
                setValue('country', 'Brasil')
                
                //SET VALUES IN ADDRESS INPUT
                setCEP(data.cep)
                setAddress(data.logradouro)
                setNeighbourhood(data.bairro)
                setCity(data.localidade)
                setUf(data.uf)
            })
            .catch((err) => console.log(err));
        }
    }
        
    const handleChangeAddressNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (/^\d*$/.test(event.target.value)) {
          setAddressNumber(event.target.value);
        }
    };
    
    const handleChangeAddressInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddressInfo(event.target.value);
    };
        
    const onSubmit = () => {
        const newDestination: DestinationInfo = {
            destinationId: v4(),
            destinationName: name,
            destinationSurname: surName,
            phoneNumber: phoneNumber,
            cpf: CPF,
            cep: CEP,
            address: address,
            addressNumber: addressNumber,
            addressInfo: addressInfo,
            neighbourhood: neighbourhood,
            city: city,
            uf: uf
        };

        handleAddDestination(newDestination);

        setName('');
        setSurName('');
        setPhoneNumber('');
        setCPF('');
        setCEP('');
        setAddress('');
        setAddressNumber('');
        setAddressInfo('');
        setNeighbourhood('');
        setCity('');
        setUf('');

        setModalIsOpen(false);
    }

    console.log(selectedDestination)
    
    return(
        <div>
            <div className='destination-card-container'>
                {destinations && destinations.map((destination, index) => (
                    <div 
                    key={destination.destinationId}
                    className={`destination-card ${selectedDestination === destination ? 'selected' : ''}`} 
                    onClick={() => handleDestinationClick(destination)}
                >
                    {selectedDestination === destination && (
                        <FontAwesomeIcon className='select-destination' icon={faSquareCheck}/>
                    )}
                        <div className='d-flex'>
                            <div style={{marginRight:"2%"}}>{destination.destinationName}</div>
                            <div>{destination.destinationSurname}</div>
                        </div>
                        <div className='mb-2'>{destination.phoneNumber}</div>
                        <div className='mb-2'>{destination.cpf}</div>
                        <div className='mb-2'>{destination.cep}</div>
                        <div className='mb-2'>{destination.address}</div>
                        <div className='mb-2'>{destination.addressNumber}</div>
                        <div className='mb-2'>{destination.addressInfo}</div>
                        <div className='mb-2'>{destination.neighbourhood}</div>
                        <div className='mb-2'>{destination.city}</div>
                        <div className='mb-2'>{destination.uf}</div>
                        <div className='add-address-button' style={{width:"80%"}} onClick={() => handleDeleteSelectedDestination(destination)}>Remover endereço</div>
                    </div>
                ))}
            </div>
            <div className='add-address-button' onClick={toggleCreateAccessModal}>Adicionar endereço {modalIsOpen? ( <>-</>) : (<>+</>)}</div>
            {modalIsOpen && (
                <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-container'>
                        <div className='input-group'>
                            <h4 className='fs-6'>Nome</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("name")} value={name} onChange={handleChangeName} required/>
                            <h4 className='fs-6'>Sobrenome</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("surname")} value={surName} onChange={handleChangeSurName} required/>
                            <h4 className='fs-6'>Número de telefone</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("phoneNumber")} value={phoneNumber} onChange={handlePhoneNumberChange} maxLength={13} required/>
                            <h4 className='fs-6'>CPF</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("cpf")} value={CPF} onChange={handleCPFChange} maxLength={15} required/>
                            <h4 className='fs-6'>CEP</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("cep")} value={CEP} onChange={HandleCepChange} maxLength={9} onBlur={checkCEP} required/>
                            <h4 className='fs-6'>Endereço</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("address")} required/>
                        </div>
                        <div className='input-group'>
                            <h4 className='fs-6'>Número</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("addressNumber")} value={addressNumber} onChange={handleChangeAddressNumber} required/>
                            <h4 className='fs-6'>Complemento</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("addressInfo")} value={addressInfo} onChange={handleChangeAddressInfo} required/>
                            <h4 className='fs-6'>Bairro</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("neighbourhood")} required/>
                            <h4 className='fs-6'>Cidade</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("city")} required/>
                            <h4 className='fs-6'>Estado</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("uf")} required/>
                            <h4 className='fs-6'>País</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("country")} required/>
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <button className='handle-form-button' type='submit'>Enviar aqui</button>
                        <div className='handle-form-button mx-3' onClick={toggleCreateAccessModal}>Cancelar</div>
                    </div>
                </form>
            )}
            {selectWarning && (
                <div className='text-danger'>Por favor selecione um ponto de entrega</div>
            )}
            <div className='advance-button' onClick={advanceToNextPage}>Avançar</div>
        </div>
    )
}

export default ShippingPage;