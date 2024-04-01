import { Link } from "react-router-dom";
import './app.css'

function ProductNav() {
    return (
        <div className='home-nav'>
            <Link  style={{textDecoration:'none'}} to='/home'>
                <div className='home-link'>Home</div>
            </Link>
            <div className='home-link' style={{fontSize:'8px', color:'#dadada'}}>/</div>
            <h4 id='product-name'>Product Name</h4>
        </div>
    )
}

export default ProductNav;