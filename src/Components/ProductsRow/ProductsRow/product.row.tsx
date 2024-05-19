import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ProductCard from '../ProductCard/product.card';
import './product.row.css';
import { products } from '../../../Database/products';
import { Link } from 'react-router-dom';

function ProductsRow() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const slidesToShow = windowWidth < 600 ? 2 : windowWidth < 820 ? 3 : windowWidth < 950 ? 4 : 5;

    const unisexProducts = products.filter(product => product.category.includes('Todos'));

    return (
        <div className="products-row-container">
            <h1 className="products-row-title">LANÇAMENTOS:</h1>
            <span className="products-row-all"><Link to={'/categories/Todos'} style={{color:'black', textDecoration:'none'}}>→ Ver todos</Link></span>
            <div className="products">
                <Slider
                    dots={true}
                    infinite={false}
                    arrows={true}
                    speed={500}
                    slidesToShow={slidesToShow}
                    slidesToScroll={slidesToShow}
                >
                    {unisexProducts.slice(0,10).map((product) => (
                        <ProductCard
                            key={product.id}
                            imgAlt={product.imgAlt}
                            imgLink={product.imgLink}
                            name={product.name}
                            price={product.price}
                            variations={product.variations}
                            productUrl={product.productUrl}
                            discountedPrice={product.discountedPrice} 
                            product={product}
                            />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ProductsRow;
