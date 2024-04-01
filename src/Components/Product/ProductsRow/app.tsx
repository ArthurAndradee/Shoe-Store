import Slider from 'react-slick';
import ProductCard from '../ProductCard/app';
import './app.css'
import { useState } from 'react';

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

    const [shoes] = useState (
        [
            {
                imgAlt: 'Chuck 70 De Luxe Heel Chrome Queen Preto',
                imgLink: 'https://converse.com.br/media/catalog/product/a/0/a08103c_a_107x1_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
                name: 'Chuck 70 De Luxe Heel Chrome Queen Preto',
                price: '799,90',
                variations: '1 cor',
                productUrl: 'chuck-70-de-luxe-heel-chrome-queen-preto'
            },
            {
                imgAlt: 'VANS THE LIZZIE CLOUD',
                imgLink: 'https://cdn.shopify.com/s/files/1/0581/5900/5854/files/VANSLIZZIEFATIGUEBLACK_600x600.png?v=1691166617',
                name: 'VANS THE LIZZIE CLOUD',
                price: '649,90',
                variations: '1 cor',
                productUrl: 'vans-the-lizzie-cloud'
            },
            {
                imgAlt: 'Nike Court Vision Mid Nn All Black',
                imgLink: 'https://images.tcdn.com.br/img/img_prod/1127564/180_tenis_nike_court_vision_mid_nn_all_black_1662_1_84b4860aa5c23c947606bf6707853c6f.jpg',
                name: 'Nike Court Vision Mid Nn All Black',
                price: '649,90',
                variations: '1 cor',
                productUrl: 'nike-court-vision-mid-nn-all-black'
            },
            {
                imgAlt: 'Converse X Martine Ali Chuck 70 Xhi Preto',
                imgLink: 'https://converse.com.br/media/catalog/product/a/0/a08651c_a_107x1_1_2.png?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg',
                name: 'Converse X Martine Ali Chuck 70 Xhi Preto',
                price: '1.099,90',
                variations: '1 cor',
                productUrl: 'converse-x-martine-ali-chuck-70-xhi-preto'
            },
            {
                imgAlt: 'Chuck Taylor All Star Modern Lift Chrome Queen Preto',
                imgLink: 'https://converse.com.br/media/catalog/product/a/0/a08102c_a_107x1_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
                name: 'Chuck Taylor All Star Modern Lift Chrome Queen Preto',
                price: '599,90',
                variations: '1 cor',
                productUrl: 'chuck-taylor-all-star-modern-lift-chrome-queen-preto'
            },
            {
                imgAlt: 'Tênis Converse Chuck Taylor All Star Hi Future Utility',
                imgLink: 'https://espacotenis.vteximg.com.br/arquivos/ids/171907-1000-1000/converse-hi-future-utility-branco.jpg?v=638191505258630000',
                name: 'Tênis Converse Chuck Taylor All Star Hi Future Utility',
                price: '449,90',
                variations: '1 cor',
                productUrl: 'tenis-coverse-chuck-taylor-all-star-hi-future-utility'
            },
            {
                imgAlt: 'Vans sem cadarço Classic',
                imgLink: 'https://www.tradeinn.com/f/125/1252969/vans-sapatos-sem-cadarco-classic.jpg',
                name: 'Vans Sapatos sem cadarço Classic',
                price: '249,90',
                variations: '1 cor',
                productUrl: 'vans-sem-cadarço-classic'
            },
            {
                imgAlt: 'Tênis Nike Air Max 97',
                imgLink: 'https://images.tcdn.com.br/img/img_prod/1048024/tenis_nike_air_max_97_branco_921826_101_6729_1_1ed3ff085def62045397ec3725058f42.jpg',
                name: 'Tênis Nike Air Max 97',
                price: '1049,90',
                variations: '1 cor',
                productUrl: 'tenis-nike-air-max-97'
            },
            {
                imgAlt: 'Chuck Taylor All Star Chrome Queen Branco',
                imgLink: 'https://converse.com.br/media/catalog/product/a/0/a06444c_a_107x1_6.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
                name: 'Chuck Taylor All Star Chrome Queen Branco',
                price: '549,90',
                variations: '1 cor',
                productUrl: 'chuck-taylor-all-star-chrome-queen-branco'
            },
            {
                imgAlt: 'Tênis Bmx Sk8-Hi Benegas X Enarson White',
                imgLink: 'https://www.tillys.com/on/demandware.static/-/Sites-master-catalog/default/dw51976e42/tillys/images/catalog/1000x1000/267631150a.jpg',
                name: 'Tênis Bmx Sk8-Hi Benegas X Enarson White',
                price: '599,90',
                variations: '1 cor',
                productUrl: 'tenis-bmx-sk8-hi-benegas-x-enarson-white'
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