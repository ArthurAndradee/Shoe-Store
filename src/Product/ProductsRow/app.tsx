import Slider from 'react-slick';
import ProductCard from '../ProductCard/app';
import './app.css'

function ProductsRow() {
    const settings = {
        dots: true,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };
    return (
    <div className="products-row-container">
        <h1 className="products-row-title">LANÇAMENTOS:</h1>
        <span className="products-row-all">→ Ver todos</span>
        <div className="products">
            <Slider {...settings}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Slider>
        </div>
    </div>
    )
}

export default ProductsRow;