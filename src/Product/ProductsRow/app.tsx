import Slider from 'react-slick';
import ProductCard from '../ProductCard/app';
import './app.css'
import { useState } from 'react';

function ProductsRow() {
    const settings = {
        dots: true,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };

    const [shoes, setShoes] = useState (
        [
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
            {
                imgAlt: 'Chuck 70 Seasonal Converse All Star',
                imgLink: 'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg',
                name: 'Chuck 70 Seasonal Converse All Star Marrom',
                price: '349,90',
                variations: '1 cor'
            },
        ]
    )
    return (
    <div className="products-row-container">
        <h1 className="products-row-title">LANÇAMENTOS:</h1>
        <span className="products-row-all">→ Ver todos</span>
        <div className="products">
            <Slider {...settings}>
                {shoes.map((shoe) => {
                    return (
                        <ProductCard 
                            imgAlt={shoe.imgAlt}
                            imgLink={shoe.imgLink}
                            name={shoe.name}
                            price={shoe.price}
                            variations={shoe.variations}
                        />
                    )
                })}
            </Slider>
        </div>
    </div>
    )
}

export default ProductsRow;