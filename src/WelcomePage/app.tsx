import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainHeader from "../Headers/MainHeader/app"
import "./app.css"
import ProductCard from "../ProductCard/app";


function WelcomePage() {
    var sliderSettings = {
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div className="body">
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
                    <h1 className="products-row-title">LANÇAMENTOS:</h1>
                    <span className="products-row-all">→ Ver todos</span>
                    <div className="products">
                        <Slider {...sliderSettings} className='slider'>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </Slider>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default WelcomePage