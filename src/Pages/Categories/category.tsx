import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer/footer';
import HomeHeader from '../../Components/Headers/HomeHeader/header';
import ProductCard from '../../Components/ProductsRow/ProductCard/product.card';
import TopNav from '../../Components/TopNavComponent/top.nav';
import { products } from '../../Database/products';
import './category.css';

interface Props {
    type: string
    category: Array<string>
}

function CategoryPage(props: Props) {
    const [sortBy, setSortBy] = useState("low-high");
    const [discountedProducts, setDiscountedProducts] = useState<any[]>([]);
    const location = useLocation();

    useEffect(() => {
        const filteredProducts = products.filter(product =>
            props.category.some(category =>
                product.category.some(subCategory => subCategory.startsWith(category))
            )
        );
        setDiscountedProducts(filteredProducts);

    }, [location.pathname, props.category]);

    function sortProducts(products: any[], sortBy: string) {
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

    const sortedProducts = sortProducts(discountedProducts, sortBy);

    return (
        <div>
            <HomeHeader />
            <TopNav name={'Produtos'} />
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
                    {sortedProducts.map((product) => (
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
    );
}

export default CategoryPage;
