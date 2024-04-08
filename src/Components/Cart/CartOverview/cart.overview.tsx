import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './cart.overview.css'
import { useCart } from '../../../Context/cart.context'

function CartOverview() {
    const {cartProducts} = useCart()

    const totalSum = cartProducts ? cartProducts.reduce((price, product) => price + product.price, 0) : 0;

    return (
        <div className='cart-overview'>
            
            <div className='cart-overview-title'>Resumo do Carrinho</div>
            <div className='cart-price'>
                <div className='price-container'>
                    <div className='price-text-container'>
                        <div className='subtotal'>Sub-total</div>
                        <div className='total'>Total</div>
                    </div>
                    <div className='price-number-container'>
                        <div className='subtotal'>{'R$ ' + totalSum.toFixed(2)}</div>
                        <div className='total'>{'R$ ' + totalSum.toFixed(2)}</div>
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