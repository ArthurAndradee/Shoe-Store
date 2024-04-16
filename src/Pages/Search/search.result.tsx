import Footer from '../../Components/Footer/footer';
import HomeHeader from '../../Components/Headers/HomeHeader/home.header';
import ProductCard from '../../Components/ProductsRow/ProductCard/product.card';
import { products } from '../../Database/products';
import './search.result.css'

interface SearchProps {

}

function SearchResult(product: SearchProps) {
    return (
        <div>
            <HomeHeader />
            <div className="category-products search-container">
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
            <Footer />
        </div>
    )
}

export default SearchResult;