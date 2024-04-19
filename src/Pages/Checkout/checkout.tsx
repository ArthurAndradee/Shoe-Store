import { useState } from 'react';
import Footer from '../../Components/Footer/footer';
import Header from '../../Components/Headers/HomeHeader/header'
import './checkout.css'
import CardPage from '../../Components/Checkout/CardPage/card.page';
import ShippingPage from '../../Components/Checkout/ShippingPage/Container/shipping.page';

function Checkout() {
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
                        <ShippingPage />
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