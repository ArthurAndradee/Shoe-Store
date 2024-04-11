import React, { useState } from 'react';
import Footer from '../../../Components/Footer/footer';
import HomeHeader from '../../../Components/Headers/HomeHeader/home.header';
import ProductCard from '../../../Components/ProductsRow/ProductCard/product.card';
import TopNav from '../../../Components/TopNavComponent/top.nav';
import { products } from '../../../Database/products';
import './feminine.css';

function FemininePage() {
    const [sortBy, setSortBy] = useState("low-high"); 

    function sortProducts (products: any[], sortBy: string) {
        switch (sortBy) {
            case "low-high":
                return products.slice().sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
            case "high-low":
                return products.slice().sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
            case "a-z":
                return products.slice().sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
            case "z-a":
                return products.slice().sort((a: { name: any; }, b: { name: string; }) => b.name.localeCompare(a.name));
            default:
                return products;
        }
    }

    const handleSortChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSortBy(event.target.value);
    };

    const sortedProducts = sortProducts(products, sortBy);

    const indexesToShow = Array.from({ length: 14 }, (_, i) => i);

    return (
        <div>
            <HomeHeader />
            <TopNav name={"Feminino"} />
            <div className="fem-products-row-container" id='grid-container'>
                <h1 className="fem-products-row-title">Femininos:</h1>
                <nav>Ordenar: </nav>
                <select className='form-select' id='fem-sort' onChange={handleSortChange} value={sortBy}>
                    <option value="low-high">Menor Preço</option>
                    <option value="high-low">Maior Preço</option>
                    <option value="a-z">Nome: A-Z</option>
                    <option value="z-a">Nome: Z-A</option>
                </select>
                <div className="fem-products">
                    {sortedProducts
                        .filter((_: any, index: number) => indexesToShow.includes(index))
                        .map((shoe: { imgAlt: string; imgLink: string; name: string; price: number; variations: string; productUrl: string; }, index: React.Key | null | undefined) => (
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
