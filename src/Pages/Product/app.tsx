import HomeHeader from '../../Components/Headers/HomeHeader/app';
import ProductDisplay from '../../Components/Product UI/ProductDisplay/app';
import ProductMenu from '../../Components/Product UI/ProductMenu/app';
import ProductNav from '../../Components/Product UI/ProductNav/app';
import './app.css'

function ProductPage() {
    return (
        <div>
            <HomeHeader />
            <ProductNav />
            <div className='content'>
                <ProductDisplay />
                <ProductMenu />
            </div>
        </div>
    )
}

export default ProductPage;