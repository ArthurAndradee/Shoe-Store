import Footer from '../../Components/Footer/footer';
import HomeHeader from '../../Components/Headers/HomeHeader/home.header';
import ProductCard from '../../Components/ProductsRow/ProductCard/product.card';
import { products } from '../../Database/products';
import './wishlist.css'

function Wishlist() {
    return (
        <div>
            <HomeHeader />
            <div className="category-products-row-container">
                <h1 className="category-products-row-title">Meus Favoritos</h1>
                <div className="category-products">
                    {products.map((product) => (
                        <ProductCard
                            imgAlt={product.imgAlt}
                            imgLink={product.imgLink}
                            name={product.name}
                            price={product.price}
                            discountedPrice={product.discountedPrice}
                            variations={product.variations}
                            productUrl={product.productUrl}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wishlist;