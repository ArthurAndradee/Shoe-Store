import { faLocationDot, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import { Order } from '../CardPage/card.page';
import { useLocalStorage } from '../../../Context/context';
import Footer from '../../Footer/footer';
import Header from '../../Headers/HomeHeader/header';
import './summary.css';

function Summary() {
    const { cartProducts } = useLocalStorage();
    const navigate = useNavigate();

    const order: Order = {
        payment: JSON.parse(localStorage.getItem('cardData') || '{}'),
        products: JSON.parse(localStorage.getItem('cart') || '[]'),
        shippingAdress: JSON.parse(localStorage.getItem('selectedShippingAddress') || '{}')
    };

    const SubmitOrder = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        sendOrderToBackend(order);
        navigate('/orderCompletion');
    };

    const sendOrderToBackend = async (order: Order) => {
        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Order successfully submitted:', responseData);

            localStorage.removeItem('cart');
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    const totalSum = cartProducts ? cartProducts.reduce((price, product) => price + product.price * product.quantity, 0) : 0;

    const getProductQuantity = (count: number) => (count === 1 ? 'produto' : 'produtos');

    return (
        <div>
            <Header />
            <section className='summary-container'>
                <section className='review-container'>
                    <h4 className='review-title'>Revise e confirme sua compra</h4>
                    <div className='shipping-info'>
                        <p>Detalhes do envio</p>
                        <div className='shipping-container'>
                            <FontAwesomeIcon className='shipping-icon' icon={faLocationDot} />
                            <div className='shipping-details'>
                                <div className='shipping-address'>{order.shippingAdress.address}, {order.shippingAdress.addressNumber}</div>
                                <div className='shipping-detail'>{order.shippingAdress.city}</div>
                                <div className='shipping-detail'>{order.shippingAdress.complement}</div>
                            </div>
                        </div>
                        <div className='shipping-product-container'>
                            <div className='top-shipping-container'>
                                <FontAwesomeIcon className='shipping-icon' icon={faTruck} />
                                <div className=''>Receba {order.products.length} {getProductQuantity(order.products.length)}</div>
                            </div>
                            <div className='bottom-shipping-container d-flex flex-column'>
                                {order.products.map((product: any, index: number) => (
                                    <div key={index} className='product-cart-container'>
                                        <div className='product-img' style={{ backgroundImage: `url(${product.imgLink})` }}></div>
                                        <div className='mt-auto'>
                                            <div className='fw-bold text-dark'>{product.name}</div>
                                            <div>Tamanho: {product.productSize}</div>
                                            <div>Quantidade: {product.quantity}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='price-review-container'>
                    <div className='price-box'>
                        <h4>Resumo da compra</h4>
                        <div className='order-info-box py-2'>
                            <div className='order-info-container border-top border-dark d-flex'>
                                <div className='order-info-name'>Produto</div>
                                <div className='order-info-value'>{'R$ ' + totalSum.toFixed(2)}</div>
                            </div>
                            <div className='order-info-container d-flex'>
                                <div className='order-info-name'>Frete</div>
                                <div className='order-info-value'>Grátis</div>
                            </div>
                        </div>
                        <div className='order-info-container d-flex border-top border-dark pb-3 pt-28/'>
                            <div className='order-info-name'>Você pagará</div>
                            <div className='order-info-value'>{'R$ ' + totalSum.toFixed(2)}</div>
                        </div>
                        <button className='btn btn-dark w-100' onClick={SubmitOrder}>Confirmar Compra</button>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
}

export default Summary;
