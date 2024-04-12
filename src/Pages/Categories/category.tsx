import React, { useState } from 'react';
import Footer from '../../Components/Footer/footer';
import HomeHeader from '../../Components/Headers/HomeHeader/home.header';
import ProductCard from '../../Components/ProductsRow/ProductCard/product.card';
import TopNav from '../../Components/TopNavComponent/top.nav';
import { products } from '../../Database/products';
import './category.css';

interface Props {
    primaryType: string
    secondaryType: string
    category: string
}

function CategoryPage(props: Props) {
    const [sortBy, setSortBy] = useState("low-high"); 

    function sortProducts (products: any[], sortBy: string) {
        switch (sortBy) {
            case "low-high":
                return products.slice().sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
            case "high-low":
                return products.slice().sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
            case "a-z":
                return products.slice().sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name));
            case "z-a":
                return products.slice().sort((a: { name: string; }, b: { name: string; }) => b.name.localeCompare(a.name));
            default:
                return products;
        }
    }

    const handleSortChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSortBy(event.target.value);
    };

    const sortedProducts = sortProducts(products, sortBy);
    const filteredProducts = sortedProducts.filter(product => product.type.startsWith(props.primaryType) || product.type.startsWith(props.secondaryType));

    return (
        <div>
            <HomeHeader />
            <TopNav name={props.category} />
            <div className="category-products-row-container" id='grid-container'>
                <h1 className="category-products-row-title">{props.category}</h1>
                <nav>Ordenar: </nav>
                <select className='form-select' id='sort' onChange={handleSortChange} value={sortBy}>
                    <option value="low-high">Menor Preço</option>
                    <option value="high-low">Maior Preço</option>
                    <option value="a-z">Nome: A-Z</option>
                    <option value="z-a">Nome: Z-A</option>
                </select>
                <div className="category-products">
                    {filteredProducts
                        .map((product, index) => (
                            <ProductCard
                                key={index}
                                imgAlt={product.imgAlt}
                                imgLink={product.imgLink}
                                name={product.name}
                                price={product.price}
                                variations={product.variations}
                                productUrl={product.productUrl}
                            />
                        ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default CategoryPage;