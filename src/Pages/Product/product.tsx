import HomeHeader from '../../Components/Headers/HomeHeader/home.header';
import ProductDisplay from '../../Components/Product UI/ProductDisplay/product.display';
import ProductMenu from '../../Components/Product UI/ProductMenu/product.menu';
import ProductNav from '../../Components/Product UI/ProductNav/product.nav';
import './product.css';

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