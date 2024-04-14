import Slider from 'react-slick';
import ProductCard from '../ProductCard/product.card';
import './product.row.css'
import { products } from '../../../Database/products';


function ProductsRow() {
        
    let windowWidth = window.innerWidth;
        
    if (window.innerWidth < 600) {
        windowWidth = 2
    } else if (window.innerWidth < 720) {
        windowWidth = 3;
    } else if (windowWidth < 850) {
        windowWidth = 4
    } else {
    windowWidth = 5
    }
    
    const settings = {
        dots: true,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: windowWidth,
        slidesToScroll: windowWidth
    };

    const indexesToShow = Array.from({ length: 10 }, (_, i) => i);
    
    return (
        <div className="products-row-container">
            <h1 className="products-row-title">LANÇAMENTOS:</h1>
            <span className="products-row-all">→ Ver todos</span>
            <div className="products">
                <Slider {...settings}>
                   {products.filter((_, index) => indexesToShow.includes(index))
                    .map((product, index) => (
                        <ProductCard
                            imgAlt={product.imgAlt}
                            imgLink={product.imgLink}
                            name={product.name}
                            price={product.price}
                            variations={product.variations}
                            productUrl={product.productUrl} 
                            discountedPrice={product.discountedPrice}/>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ProductsRow;

