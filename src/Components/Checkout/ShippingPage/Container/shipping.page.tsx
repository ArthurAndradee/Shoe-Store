import { useState } from 'react';
import { useForm } from "react-hook-form"
import './shipping.page.css'
import { useLocalStorage } from '../../../../Context/context';
import { v4 } from 'uuid';

export interface DestinationInfo {
    id: string
    name: string
    surName: string
    phoneNumber: string
    cpf: string
    cep: string
    address: string
    addressNumber: string
    complement: string
    neighbourhood: string
    city: string
    uf: string
}

function ShippingPage(props: DestinationInfo) {
    const {handleAddDestination, handleRemoveDestination, destinations} = useLocalStorage()
    const {register, setFocus, setValue, handleSubmit} = useForm()
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectDestination, setSelectDestination] = useState(-1)

    const handleCreateAddressModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const onSubmit = (e: Object) => {
        console.log(e)
        console.log(destination)

        handleAddDestination(destination)

        setName('');
        setSurName('');
        setPhoneNumber('');
        setCPF('');
        setCEP('');
        setaAdressNumber('');
        setComplement('');


        //CLEAR INPUT VALUES AFTER SUBMIT
        setName('');
        setSurName('');
        setPhoneNumber('');
        setCPF('');
        setCEP('');
        setValue('address', '')
        setaAdressNumber('');
        setComplement('');
        setValue('neighbourhood', '')
        setValue('city', '')
        setValue('uf', '')
    }

    //ADDRESS OBJECT SET METHOD
    const [destination, setDestination] = useState<DestinationInfo>({
        id: props.id,
        name: props.name,
        surName: props.surName,
        phoneNumber: props.phoneNumber,
        cpf: props.cpf,
        cep: props.cep,
        address: props.address,
        addressNumber: props.addressNumber,
        complement: props.complement,
        neighbourhood: props.neighbourhood,
        city: props.city,
        uf: props.uf
    })

    //---------------------METHODS TO HANDLE INPUT CHANGES---------------------

        //NAME
        const [name, setName] = useState('')
        const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
        };


        //SURNAME
        const [surName, setSurName] = useState('')
        const handleChangeSurName = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSurName(event.target.value);
        };


        //PHONE NUMBER
        const [phoneNumber, setPhoneNumber] = useState('');
        const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const formattedValue = (event.target.value).replace(/\D/g, '')
            .replace(/^(\(\d{2}\)) (\d{5})/, '$1 $2-') 
            .replace(/(\d{2})\s?(\d{5})\s?(\d{4})/, '$1 $2-$3'); 

            setPhoneNumber(formattedValue);
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

        //CEP
        const [CEP, setCEP] = useState('');
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
                        setFocus('addressNumber')

                        //SET VALUES FOR ADDRESS OBJECT
                        setDestination({
                            id: v4(),
                            name: name,
                            surName: surName,
                            phoneNumber: phoneNumber,
                            cpf: CPF,
                            cep: data.cep,
                            address: data.logradouro,
                            addressNumber: addressNumber,
                            complement: complement,
                            neighbourhood: data.bairro,
                            city: data.localidade,
                            uf: data.uf
                        })
                    })
                    .catch((err) => console.log(err));
                }
            }

        //ADDRESS NUMBER 
        const [addressNumber, setaAdressNumber] = useState('')
        const handleChangeAddressNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (/^\d*$/.test(event.target.value)) {
              setaAdressNumber(event.target.value);
            }
        };

        //COMPLEMENT
        const [complement, setComplement] = useState('')
        const handleChangeComplement = (event: React.ChangeEvent<HTMLInputElement>) => {
            setComplement(event.target.value);
        };

    //---------------------------------------------------------------

    return(
        <div>
            <div className='destination-card-container'>
                {destinations && destinations.map((destination, index) => (
                    <div className='destination-card' onClick={() => setSelectDestination(index)}>
                        {selectDestination === index && (
                            <div className='select-destination'>✓</div>
                        )}
                        <div className='d-flex'>
                            <div style={{marginRight:"2%"}}>{destination.name}</div>
                            <div>{destination.surName}</div>
                        </div>
                        <div className='mb-2'>{destination.phoneNumber}</div>
                        <div className='mb-2'>{destination.cpf}</div>
                        <div className='mb-2'>{destination.cep}</div>
                        <div className='mb-2'>{destination.address}</div>
                        <div className='mb-2'>{destination.addressNumber}</div>
                        <div className='mb-2'>{destination.complement}</div>
                        <div className='mb-2'>{destination.neighbourhood}</div>
                        <div className='mb-2'>{destination.city}</div>
                        <div className='mb-2'>{destination.uf}</div>
                        <div className='add-address-button' style={{width:"80%"}} onClick={() => handleRemoveDestination(destination)}>Remover endereço</div>
                    </div>
                ))}
            </div>
            <div className='add-address-button' onClick={handleCreateAddressModal}>Adicionar endereço {modalIsOpen? ( <>-</>) : (<>+</>)}</div>
            {modalIsOpen ? (
                <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-container'>
                        <div className='input-group'>
                            <h4 className='fs-6'>Nome</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("name")} value={name} onChange={handleChangeName}/>
                            <h4 className='fs-6'>Sobrenome</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("surname")} value={surName} onChange={handleChangeSurName}/>
                            <h4 className='fs-6'>Número de telefone</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("phoneNumber")} value={phoneNumber} onChange={handlePhoneNumberChange} maxLength={13}/>
                            <h4 className='fs-6'>CPF</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("cpf")} value={CPF} onChange={handleCPFChange} maxLength={15}/>
                            <h4 className='fs-6'>CEP</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("cep")} value={CEP} onChange={HandleCepChange} maxLength={9} onBlur={checkCEP}/>
                            <h4 className='fs-6'>Endereço</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("address")}/>
                        </div>
                        <div className='input-group'>
                            <h4 className='fs-6'>Número</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("addressNumber")} value={addressNumber} onChange={handleChangeAddressNumber}/>
                            <h4 className='fs-6'>Complemento</h4>
                            <input className="form-control form-control-sm" id='form-input' type="text" {...register("complement")} value={complement} onChange={handleChangeComplement}/>
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