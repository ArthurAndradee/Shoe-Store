import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/footer';
import ProductCard from '../../Components/ProductsRow/ProductCard/product.card';
import './search.result.css'
import { useLocalStorage } from '../../Context/context';
import Header from '../../Components/Headers/HomeHeader/header';
import Axios from 'axios';
import { Product } from '../..';

function SearchResult() {
    const [showCartItemsQuantity, setShowCartItemsQuantity] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const {cartProducts} = useLocalStorage()

    const [data, setData] = useState<Product[]>([]);
  
    const getData = async () => {
      const response = await Axios.get("http://localhost:5000/getData");
      setData(response.data);
    };
    
    useEffect(() => {
      getData()
    },[])
  
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
  
    useEffect(() => {
      if (cartProducts?.length) {
        setShowCartItemsQuantity(true);
      } else {
        setShowCartItemsQuantity(false)
      }
  
    }, [showCartItemsQuantity, cartProducts]);
    
    const filteredProducts = data.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
          <Header />
            <form className='search-input-container'>
              <input type='text' className='search-input' placeholder='Digite aqui...' onChange={handleSearchInputChange}/>
            </form> 
            <div className="category-products search-container">
                {filteredProducts.map((product) => (
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
            <Footer />
        </div>
    )
}

export default SearchResult;