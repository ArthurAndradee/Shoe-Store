import HomeHeader from '../../Components/Headers/HomeHeader/app';
import ProductDisplay from '../../Components/Product UI/ProductDisplay/app';
import ProductMenu from '../../Components/Product UI/ProductMenu/app';
import ProductNav from '../../Components/Product UI/ProductNav/app';
import './app.css';

interface ProductProps {
    name: string
    imgLink: string
  }

function ProductPage(props: ProductProps) {
    return (
        <div>
            <HomeHeader />
            <ProductNav name={props.name} />
            <div className='content'>
                <ProductDisplay imgLink={props.imgLink} />
                <ProductMenu />
            </div>
        </div>
    )
}

export default ProductPage;