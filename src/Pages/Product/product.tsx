import { useState } from 'react';
import HomeHeader from '../../Components/Headers/HomeHeader/home.header';
import ProductDisplay from '../../Components/ProductPage/ProductDisplay/product.display';
import ProductMenu from '../../Components/ProductPage/ProductMenu/product.menu';
import ProductNav from '../../Components/ProductPage/ProductNav/product.nav';
import './product.css';

interface ProductProps {
    id: string;
    name: string,
    type: string,
    price: number;
    catchPhrase: string,
    imgLink: string,
    productUrl: string
    productSize: string
  }

function ProductPage(props: ProductProps) {
  const [ ,setSelectedSize] = useState<string>(props.productSize);
  const [ ,setId] = useState<string>(props.productSize);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const createId = (id: string) => {
    setId(id);
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
                createId={createId}
                />
            </div>
            
        </div>
    )
}

export default ProductPage;