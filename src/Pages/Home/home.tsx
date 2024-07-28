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
                <div className="testingTags-container">
                    <section className='testingTagBox'>
                        <div className="background-img background-text" id="testingTag-1">
                            <h2 className="testingTag-title">Converse X Martine Ali</h2>
                            <p className="testingTag-description">Explore a fusão única de elementos clássicos e modernos nessa colaboração.</p>
                            <Link to={'/products/converse-x-martine-ali-chuck-70-xhi-preto'} className="testingTag-buy-link">
                                <div className="testingTag-buyButton">
                                    COMPRE AGORA
                                </div>
                            </Link>
                        </div>
                        <div className="background-img" id="testingTag-2"></div>
                        <div className="background-img" id="testingTag-3"></div>
                    </section>
                    <section className='testingTagBox-2'>
                        <div className="background-img background-text" id="testingTag-4">
                            <h2 className="testingTag-title">Modern Lift Chrome Queen</h2>
                            <p className="testingTag-description">Libere seu ltestingTago punk no estilo assintestingTago Chuck Taylor. </p>
                            <Link to={'/products/chuck-taylor-all-star-modern-lift-chrome-queen-preto'} className="testingTag-buy-link">
                                <div className="testingTag-buyButton">
                                    COMPRE AGORA
                                </div>
                            </Link>
                        </div>
                        <div className="background-img" id="testingTag-5"></div>
                        <div className="background-img" id="testingTag-6"></div>
                    </section>
                </div>
                <ProductsRow products={products} />
                <div className='large-testingTagBox'>
                    <section className="background-img background-text" id="testingTag-7">
                        <div className="large-testingTag-box">
                            <h2>ONE STAR</h2>
                            <p className="testingTag-description">O clássico renovtestingTago: a trtestingTagição do skate dos anos 90, agora com tecnologia de amortecimento CX.</p>
                            <div className="large-testingTag-buyButton">
                                <Link to={'/products/one-star-pro-cano-baixo-normal-preto'} className="testingTag-buy-link">COMPRE AGORA</Link>
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