import Footer from '../../../Components/Footer/footer';
import HomeHeader from '../../../Components/Headers/HomeHeader/home.header';
import ProductCard from '../../../Components/ProductsRow/ProductCard/product.card';
import TopNav from '../../../Components/TopNavComponent/top.nav';
import { products } from '../../../Database/products';
import './feminine.css';

function FemininePage() {
    const indexesToShow = Array.from({ length: 14 }, (_, i) => i);

    return (
        <div>
            <HomeHeader />
            <TopNav name={"Feminino"}/>
            <div className="fem-products-row-container" id='grid-container'>
                <h1 className="fem-products-row-title">Femininos:</h1>
                <nav>Ordenar: </nav>
                <select className='form-select' id='fem-sort'>
                    <option value="low-high">Menor Preço</option>
                    <option value="high-low">Maior Preço</option>
                    <option value="a-z">Nome: A-Z</option>
                    <option value="z-a">Nome: Z-A</option>
                </select>
                <div className="fem-products">
                    {products.filter((_, index) => indexesToShow.includes(index))
                        .map((shoe, index) => (
                            <ProductCard
                                key={index}
                                imgAlt={shoe.imgAlt}
                                imgLink={shoe.imgLink}
                                name={shoe.name}
                                price={shoe.price}
                                variations={shoe.variations}
                                productUrl={shoe.productUrl}
                            />
                        ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default FemininePage;