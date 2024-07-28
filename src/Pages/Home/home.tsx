import { Link } from "react-router-dom";
import { ProductProps } from "../..";
import ProductsRow from "../../Components/ProductsRow/ProductsRow/product.row";
import Footer from "../../Components/Footer/footer";
import HomeHeader from "../../Components/Headers/HomeHeader/header";
import "./home.css"

function HomePage({ products }: ProductProps) {
    return (
        <div className="body">
            <HomeHeader />
            <main>
                <div className="sections-container">
                    <section className='sectionBox'>
                        <div className="background-img background-text" id="section-1">
                            <h2 className="section-title">Converse X Martine Ali</h2>
                            <p className="section-description">Explore a fusão única de elementos clássicos e modernos nessa colaboração.</p>
                            <Link to={'/products/converse-x-martine-ali-chuck-70-xhi-preto'} className="section-buy-link">
                                <div className="section-buyButton">
                                    COMPRE AGORA
                                </div>
                            </Link>
                        </div>
                        <div className="background-img" id="section-2"></div>
                        <div className="background-img" id="section-3"></div>
                    </section>
                    <section className='sectionBox-2'>
                        <div className="background-img background-text" id="section-4">
                            <h2 className="section-title">Modern Lift Chrome Queen</h2>
                            <p className="section-description">Libere seu lsectiono punk no estilo assinsectiono Chuck Taylor. </p>
                            <Link to={'/products/chuck-taylor-all-star-modern-lift-chrome-queen-preto'} className="section-buy-link">
                                <div className="section-buyButton">
                                    COMPRE AGORA
                                </div>
                            </Link>
                        </div>
                        <div className="background-img" id="section-5"></div>
                        <div className="background-img" id="section-6"></div>
                    </section>
                </div>
                <ProductsRow products={products} />
                <div className='large-sectionBox'>
                    <section className="background-img background-text" id="section-7">
                        <div className="large-section-box">
                            <h2>ONE STAR</h2>
                            <p className="section-description">O clássico renovsectiono: a trsectionição do skate dos anos 90, agora com tecnologia de amortecimento CX.</p>
                            <div className="large-section-buyButton">
                                <Link to={'/products/one-star-pro-cano-baixo-normal-preto'} className="section-buy-link">COMPRE AGORA</Link>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default HomePage;