import Slider from 'react-slick';
import ProductCard from '../ProductCard/product.card';
import './product.row.css'
import { products } from '../Props/shoes';


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
    
        return (
            <div className="products-row-container">
        <h1 className="products-row-title">LANÇAMENTOS:</h1>
        <span className="products-row-all">→ Ver todos</span>
        <div className="products">
            <Slider {...settings}>
                {products.map((shoe) => {
                    return (
                        <ProductCard 
                        imgAlt={shoe.imgAlt}
                        imgLink={shoe.imgLink}
                        name={shoe.name}
                        price={shoe.price}
                        variations={shoe.variations}
                        productUrl={shoe.productUrl}
                        />
                        )
                    })}
            </Slider>
        </div>
    </div>
    )
}

export default ProductsRow;

