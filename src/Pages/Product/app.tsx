import HomeHeader from '../../Components/Headers/HomeHeader/app';
import ProductDisplay from '../../Components/Product UI/ProductDisplay/app';
import ProductMenu from '../../Components/Product UI/ProductMenu/app';
import ProductNav from '../../Components/Product UI/ProductNav/app';
import './app.css';

interface ProductProps {
    imgLink: string,
    name: string,
    type: string,
    price: string,
    catchPhrase: string
  }

function ProductPage(props: ProductProps) {
    return (
        <div>
            <HomeHeader />
            <ProductNav name={props.name} />
            <div className='content'>
                <ProductDisplay imgLink={props.imgLink} />
                <ProductMenu name={props.name} type={props.type} price={props.price} catchPhrase={props.catchPhrase} />
            </div>
        </div>
    )
}

export default ProductPage;