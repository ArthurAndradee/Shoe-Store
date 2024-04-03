import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './cart.overview.css'

function CartOverview() {
    return (
        <div className='cart-overview'>
            <div className='cart-overview-title'>Resumo do Carrinho</div>
            <div className='cart-price'>
                <div className='price-container'>
                    <div className='price-text-container'>
                        <div className='subtotal'>Subtotal:</div>
                        <div className='total'>Total:</div>
                    </div>
                    <div className='price-number-container'>
                        <div className='subtotal'>Subtotal price</div>
                        <div className='total'>Total price</div>
                    </div>
                </div>
                <div className='checkout-button'>Avançar para o checkout</div>
            </div>
            <div className='checkout-container'>
                <div className='checkout-icon'><FontAwesomeIcon icon={faCircleCheck} /></div>
                <div className='checkout-text'>Checkout rápido e seguro</div>
            </div>
        </div>
    )
}

export default CartOverview