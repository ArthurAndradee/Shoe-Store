import MainHeader from "../Headers/MainHeader/app"
import "./app.css"

function WelcomePage() {
    return (
        <div>
            <MainHeader />
            <main>

                <div className="ads-container">
                    <section className='adBox'>
                        <div className="background-img background-text" id="ad-1">
                            <h2 className="ad-title">Converse X Martine Ali</h2>
                            <p className="ad-description">Explore a fusão única de elementos clássicos e modernos nessa <br /> colaboração.</p>
                            <div className="ad-buyButton">COMPRE AGORA</div>
                        </div>
                        <div className="background-img" id="ad-2"></div>
                        <div className="background-img" id="ad-3"></div>
                    </section>
                    
                    <section className='adBox-2'>
                        <div className="background-img background-text" id="ad-4">
                            <h2 className="ad-title">Converse X Martine Ali</h2>
                            <p className="ad-description">Explore a fusão única de elementos clássicos e modernos nessa <br /> colaboração.</p>
                            <div className="ad-buyButton">COMPRE AGORA</div>
                        </div>
                        <div className="background-img" id="ad-5"></div>
                        <div className="background-img" id="ad-6"></div>
                    </section>
                </div>

                <div className="products-row-container">
                    <h1 className="products-row-title">LANÇAMENTOS</h1>
                    <span className="products-row-all">-Ver todos</span>
                    <div className="products">
                        <div className="left-arrow arrow"></div>
                        <div className="product">
                            <div className="heart-icon"></div>
                            <div className="product-background-img"></div>
                            <p className="product-name"></p>
                            <span className="product-price"></span>
                            <span className="product-variations"></span>
                        </div>
                        <div className="right-arrow arrow"></div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default WelcomePage