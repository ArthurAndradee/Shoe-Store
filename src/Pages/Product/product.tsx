import { useState } from 'react';
import HomeHeader from '../../Components/Headers/HomeHeader/home.header';
import ProductDisplay from '../../Components/Product UI/ProductDisplay/product.display';
import ProductMenu from '../../Components/Product UI/ProductMenu/product.menu';
import ProductNav from '../../Components/Product UI/ProductNav/product.nav';
import './product.css';

interface ProductProps {
    id: number;
    name: string,
    type: string,
    price: string,
    catchPhrase: string,
    imgLink: string,
    productUrl: string
    productSize: string
  }

function ProductPage(props: ProductProps) {
  const [ ,setSelectedSize] = useState<string>(props.productSize);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

    return (
        <div>
            <HomeHeader />
            <ProductNav name={props.name} />
            <div className='content'>
                <ProductDisplay imgLink={props.imgLink} />
                <ProductMenu 
                id={props.id} 
                name={props.name} 
                type={props.type} 
                price={props.price} 
                catchPhrase={props.catchPhrase} 
                imgLink={props.imgLink} 
                productUrl={props.productUrl}
                productSize={props.productSize}
                onSizeChange={handleSizeChange}
                />
            </div>
            
        </div>
    )
}

export default ProductPage;