import { useState } from 'react';
import Footer from '../../Components/Footer/footer';
import Header from '../../Components/Headers/HomeHeader/header'
import './checkout.css'
import CardPage from '../../Components/Checkout/CardPage/card.page';
import ShippingPage from '../../Components/Checkout/ShippingPage/Container/shipping.page';

interface DestinationInfo {
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

function Checkout(props: DestinationInfo) {
    const [isShippingSelected, setIsShippingSelected] = useState(true)

    const handleShippingClick = () => {
        setIsShippingSelected(true);
    };

    const handlePaymentClick = () => {
        setIsShippingSelected(false);
    };

    return (
        <div> 
            <Header />
            <div className='checkout-section'>
                <div className='checkout-nav'>
                    <div className='shipping' onClick={handleShippingClick}>Frete</div>
                    <div className='payment' onClick={handlePaymentClick}>Revisão e pagamentos</div>
                </div>
                <div>
                    {isShippingSelected ? (
                        <ShippingPage 
                        name={props.name} 
                        surName={props.surName} 
                        phoneNumber={props.phoneNumber} 
                        cpf={props.cpf} 
                        cep={props.cpf} 
                        address={props.address} 
                        addressNumber={props.addressNumber} 
                        complement={props.complement} 
                        neighbourhood={props.neighbourhood} 
                        city={props.city} 
                        uf={props.uf} />
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