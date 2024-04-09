import Footer from '../../../Components/Footer/footer'
import HomeHeader from '../../../Components/Headers/HomeHeader/home.header'
import ProductCard from '../../../Components/ProductsRow/ProductCard/product.card'
import { products } from '../../../Database/products'
import './feminine.css'

function FemininePage() {
    
    const indexesToShow = Array.from({ length: 14 }, (_, i) => i);
    
    return (
        <div>
            <HomeHeader />
            
            <div className="fem-products-row-container">
                <h1 className="fem-products-row-title">Femininos:</h1>
                <div className="fem-products ">
                       {/* {products.filter((_, index) => indexesToShow.includes(index))
                        .map((shoe, index) => (
                            <ProductCard
                                imgAlt={shoe.imgAlt}
                                imgLink={shoe.imgLink}
                                name={shoe.name}
                                price={shoe.price}
                                variations={shoe.variations}
                                productUrl={shoe.productUrl}
                            />
                        ))} */}
                        <div className='test'></div>
                        <div className='test'></div>
                        <div className='test'></div>
                        <div className='test'></div>
                        <div className='test'></div>
                        <div className='test'></div>
                        <div className='test'></div>
                        <div className='test'></div>
                        <div className='test'></div>
                        <div className='test'></div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default FemininePage;