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
                        <p>Detalha do envio</p>
                        <div className='shipping-container'>
                            <div className='shipping-icon'></div>
                            <div className='shipping-details'>
                                <div className='shipping-address'></div>
                                <div className='shipping-detail'></div>
                                <div className='shipping-detail'></div>
                            </div>
                            <div>Editar ou escolher outro produto</div>
                        </div>
                        <div className='shipping-product-container'>
                            <div className='top-shipping-container'>
                                <div className='shipping-icon'></div>
                                <div className=''>Receba X produto(s)</div>
                            </div>
                            <div className='bottom-shipping-container'>
                                <img />
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
                        <p>Resumo da compra</p>
                        <div>
                            <div>
                                <div>Produto</div>
                                <div>Produto Preço</div>
                            </div>
                            <div>
                                <div>Frete</div>
                                <div>Frete Preço</div>
                            </div>
                        </div>
                        <div>
                            <div>Você pagará</div>
                            <div>Preço</div>
                        </div>
                        <div>Confirmar Compra</div>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    )
}

export default Summary;