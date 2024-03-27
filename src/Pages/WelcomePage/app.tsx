import MainHeader from "../../Components/Headers/TopHeader/app"

import "./app.css"
import ProductsRow from "../../Components/Product/ProductsRow/app";


function WelcomePage() {

    return (
        <div className="body">
            <MainHeader />
            <main>

                <div className="ads-container">

                    <section className='adBox'>
                        <div className="background-img background-text" id="ad-1">
                            <h2 className="ad-title">Converse X Martine Ali</h2>
                            <p className="ad-description">Explore a fusão única de elementos clássicos e modernos nessa colaboração.</p>
                            <div className="ad-buyButton">COMPRE AGORA</div>
                        </div>
                        <div className="background-img" id="ad-2"></div>
                        <div className="background-img" id="ad-3"></div>
                    </section>
                    
                    <section className='adBox-2'>
                        <div className="background-img background-text" id="ad-4">
                            <h2 className="ad-title">Converse X Martine Ali</h2>
                            <p className="ad-description">Explore a fusão única de elementos clássicos e modernos nessa colaboração.</p>
                            <div className="ad-buyButton">COMPRE AGORA</div>
                        </div>
                        <div className="background-img" id="ad-5"></div>
                        <div className="background-img" id="ad-6"></div>
                    </section>

                </div>

                <ProductsRow />

                <div className='large-adBox'>

                    <section className="background-img background-text" id="ad-7">
                        <div className="large-ad-box">
                            <h2 >ONE STAR</h2>
                            <p className="ad-description">O clássico renovado: a tradição do skate dos anos 90, agora com tecnologia de amortecimento CX.</p>
                            <div className="large-ad-buyButton">COMPRE AGORA</div>
                        </div>
                    </section>

                </div>
                
                <footer>
                    AA
                </footer>

            </main>
        </div>
    )
}

export default WelcomePage