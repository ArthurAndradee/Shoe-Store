import Footer from '../../Components/Footer/footer';
import HomeHeader from '../../Components/Headers/HomeHeader/home.header';
import './cart.css'

function Cart() {
    return (
        <div className='cart-wrapper'>
            <HomeHeader />

            <div className='cart-section'>
                <div className='cart-title'>
                    <h1 id='title'>Carrinho de Compras</h1>
                </div>
                <div className='cart-container'>
                    <div className='items-container'>
                    </div>
                    <div className='cart-overview'>
                        <div className='cart-overview-title'>Resumo do Carrinho</div>
                        <div className='cart-price'>
                            <div className='subtotal'>Subtotal:</div>
                            <div className='total'>Total:</div>
                            <div className='checkout-button'>Avançar para o checkout</div>
                        </div>
                        <div className='checkout-container'>
                            <div className='checkout-icon'>icon</div>
                            <div className='checkout-text'>Checkout rápido e seguro</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart;