import { faLocationDot, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../Footer/footer';
import Header from '../../Headers/HomeHeader/header';
import './summary.css'

function Summary() {
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
                                <div className='shipping-address'>AVENIDA DORIVAL</div>
                                <div className='shipping-detail'>CACHOEIRINHA</div>
                                <div className='shipping-detail'>PRONTOMED</div>
                            </div>
                        </div>
                        <div className='shipping-product-container'>
                            <div className='top-shipping-container'>
                                <FontAwesomeIcon className='shipping-icon' icon={faTruck} />
                                <div className=''>Receba X produto(s)</div>
                            </div>
                            <div className='bottom-shipping-container'>
                                <div className='product-img' style={{backgroundImage:'url("")'}}></div>
                                <div>
                                    <div>Product name</div>
                                    <div>Product size</div>
                                    <div>Product quantity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='price-container'>
                    <div className='price-box'>
                        <h4>Resumo da compra</h4>
                        <div className='order-info-box py-2'>
                            <div className='order-info-container border-top border-dark d-flex'>
                                <div className='order-info-name'>Produto</div>
                                <div className='order-info-value'>Produto Preço</div>
                            </div>
                            <div className='order-info-container d-flex'>
                                <div className='order-info-name'>Frete</div>
                                <div className='order-info-value'>Grátis</div>
                            </div>
                        </div>
                        <div className='order-info-container d-flex border-top border-dark pb-3 pt-28/'>
                            <div className='order-info-name'>Você pagará</div>
                            <div className='order-info-value'>Preço</div>
                        </div>
                        <button className='btn btn-dark w-100'>Confirmar Compra</button>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    )
}

export default Summary;