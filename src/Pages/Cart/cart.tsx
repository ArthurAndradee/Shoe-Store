import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <div className='list-container'>
                        <div className='items-container'>
                            <div className='item-display'>
                                <div className='item-img'></div>
                                <div className='item-info'>
                                    <div className='item-name'>One Star Academy Pro Preto</div>
                                    <div className='item-specifications'>
                                        <div className='item-variation'><b>Cor: </b> BLACK</div>
                                        <div className='item-variation'><b>Size: </b> 40</div>
                                    </div>
                                </div>
                            </div>
                            <div className='items-handle'>
                                <input type="number" id="quantity" name="quantity" min="1" />
                                <div className='item-functions'>
                                    <div className='item-price'>R$579,90</div>
                                    <div>
                                        <div className='item-wish'>MOVER PARA LISTA DE DESEJOS</div>
                                        <div className='item-remove'>REMOVER ITEM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart;