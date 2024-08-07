import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocalStorage } from '../../../Context/context'
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './cart.overview.css'

function CartOverview() {
    const {cartProducts} = useLocalStorage()
    const [failWarning, setFailWarning] = useState(false)
    const navigate = useNavigate()
    
    function handleLogin() {
        if(cartProducts?.length) { //Checks if user has items in cart
            if(!localStorage.getItem('authToken')) { //Checks if user is logged in
                login()
            } else {
                navigate('/checkout')
            }
        } else {
            setFailWarning(true)
        }
    }
    
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse)
            if(cartProducts?.length) {
                navigate('/checkout')
                localStorage.setItem('authToken', tokenResponse.access_token)
            } else {
                setFailWarning(true)
            }
        },
        onError: tokenResponse => setFailWarning(true)
    });

    const totalSum = cartProducts ? cartProducts.reduce((price, product) => price + product.price * product.quantity, 0) : 0;

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
                <div className='checkout-button' onClick={() => handleLogin()}>Avançar para o checkout</div>
                {failWarning && (
                    <div className='text-danger text-center'>Por favor adicione produtos ao carrinho</div>
                )}
            </div>
            <div className='checkout-container'>
                <div className='checkout-icon'><FontAwesomeIcon icon={faCircleCheck} /></div>
                <div className='checkout-text'>Checkout rápido e seguro</div>
            </div>
        </div>
    )
}

export default CartOverview