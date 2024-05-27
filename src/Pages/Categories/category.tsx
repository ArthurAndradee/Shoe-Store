import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/footer';
import HomeHeader from '../../Components/Headers/HomeHeader/header';
import ProductCard from '../../Components/ProductsRow/ProductCard/product.card';
import TopNav from '../../Components/TopNavComponent/top.nav';
import './category.css';
import { Product } from '../..';
import Axios from 'axios';

function CategoryPage() {
    const [sortBy, setSortBy] = useState("low-high");
    const [productsDisplayed, setProductsDisplayed] = useState<Product[]>([]);
    const location = useLocation();
    const { category } = useParams<{ category: string }>();

    const [data, setData] = useState<any[]>([]);
  
    const getData = async () => {
      const response = await Axios.get("http://localhost:5000/getProducts");
      setData(response.data);
    };

    useEffect(() => {
      getData()
    },[])

    useEffect(() => {
        let filteredProducts: Product[] = [];

        if (location.pathname === '/categories/promocoes') {
            filteredProducts = data.filter(product => product.discountedPrice > 0);
        } else if (category) {
            if (category === "Todos") {
                filteredProducts = data
            } else {
                filteredProducts = data.filter(data => data.category.includes(category));
            }
        }

        setProductsDisplayed(filteredProducts);
    }, [location.pathname, category, data]);

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
            <TopNav name={category || 'Promoções'} />
            <div className="category-products-row-container" id='grid-container'>
                <h1 className="category-products-row-title">{category || 'Promoções'}</h1>
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
                            key={product.productUrl} // Ensure to add a unique key prop
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
