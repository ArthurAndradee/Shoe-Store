import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/footer';
import HomeHeader from '../../Components/Headers/HomeHeader/header';
import ProductCard from '../../Components/ProductsRow/ProductCard/product.card';
import TopNav from '../../Components/TopNavComponent/top.nav';
import './category.css';
import { ProductProps, Product } from '../..';

function CategoryPage({ products }: ProductProps) {
    const [sortBy, setSortBy] = useState("low-high");
    const [productsDisplayed, setProductsDisplayed] = useState<Product[]>([]);
    const { category } = useParams<{ category: string }>();
    const [ displayedCategory, setDisplayedCategory ] = useState('Promoções')

    useEffect(() => {
        let filteredProducts: Product[] = [];

        if (category === 'promocoes') {
            filteredProducts = products.filter((product: { discountedPrice: number; }) => product.discountedPrice > 0);
        } else if (category) {
            if (category === "Todos") {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter((product: { category: string | string[]; }) => product.category.includes(category));
            }
            setDisplayedCategory(category)
        }

        setProductsDisplayed(filteredProducts);
    }, [category, products]);

    function sortProducts(products: Product[], sortBy: string) {
        switch (sortBy) {
            case "low-high":
                return products.slice().sort((a, b) => a.price - b.price);
            case "high-low":
                return products.slice().sort((a, b) => b.price - a.price);
            case "a-z":
                return products.slice().sort((a, b) => a.name.localeCompare(b.name));
            case "z-a":
                return products.slice().sort((a, b) => b.name.localeCompare(a.name));
            default:
                return products;
        }
    }

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value);
    };

    const sortedProducts = sortProducts(productsDisplayed, sortBy);

    return (
        <div>
            <HomeHeader />
            <TopNav name={displayedCategory || 'Promoções'} />
            <div className="category-products-row-container" id='grid-container'>
                <h1 className="category-products-row-title">{displayedCategory || 'Promoções'}</h1>
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
                            product={product}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CategoryPage;
