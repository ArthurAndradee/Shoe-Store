import { useState } from 'react';
import { faCircle, faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../Components/Footer/footer';
import Header from '../../Components/Headers/HomeHeader/header'
import CardPage from '../../Components/Checkout/CardPage/card.page';
import ShippingPage from '../../Components/Checkout/ShippingPage/shipping.page';
import './checkout.css'

interface DestinationInfo {
    destinationId: string
    name: string
    surName: string
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

function Checkout(props: DestinationInfo) {
    const [isShippingSelected, setIsShippingSelected] = useState(true)
  
    return (
        <div> 
            <Header />
            <div className='checkout-section'>
                <div className='checkout-nav'>
                    {isShippingSelected ? (
                        <FontAwesomeIcon icon={faCircleDot} style={{margin:'5px'}} />
                    ) : (
                        <FontAwesomeIcon icon={faCircle} style={{margin:"5px"}} id='foo'/>
                    )}
                    <div className='checkout-sub' onClick={() => setIsShippingSelected(true)}>Frete</div>
                    {isShippingSelected ? (
                        <FontAwesomeIcon icon={faCircle} style={{margin:"5px"}} id='foo'/>
                    ) : (
                        <FontAwesomeIcon icon={faCircleDot} style={{margin:'5px'}} />
                    )}
                    <div className='checkout-sub' onClick={() => setIsShippingSelected(false)}>Revisão e pagamentos</div>
                </div>
                <div>
                    {isShippingSelected ? (
                        <ShippingPage 
                        destinationId={props.destinationId}
                        destinationName={props.name} 
                        destinationSurname={props.surName} 
                        phoneNumber={props.phoneNumber} 
                        cpf={props.cpf} 
                        cep={props.cpf} 
                        address={props.address} 
                        addressNumber={props.addressNumber} 
                        complement={props.complement} 
                        neighbourhood={props.neighbourhood} 
                        city={props.city} 
                        uf={props.uf} 
                        handleStateChange={() => setIsShippingSelected(!isShippingSelected)}
                        />
                    ) : (
                        <CardPage />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout;