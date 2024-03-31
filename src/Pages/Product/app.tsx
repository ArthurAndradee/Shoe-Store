import { Link } from 'react-router-dom';
import HomeHeader from '../../Components/Headers/HomeHeader/app';
import ProductDisplay from '../../Components/Product UI/ProductDisplay/app';
import ProductMenu from '../../Components/Product UI/ProductMenu/app';
import './app.css'

function ProductPage() {
    return (
        <div>
            <HomeHeader />
            <nav className='home-nav'>
                <Link  style={{textDecoration:'none'}} to='/home'>
                    <div className='home-link'>Home</div>
                </Link>
                <div className='home-link' style={{fontSize:'8px', color:'#dadada'}}>/</div>
                <h4 id='product-name'>Product Name</h4>
            </nav>
            <div className='content'>
                <ProductDisplay />
                <ProductMenu />
            </div>
        </div>
    )
}

export default ProductPage;