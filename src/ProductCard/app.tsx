import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './app.css'

function ProductCard() {
    return (
        <div className="product">
            <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            <img alt="Chuck 70 Seasonal Converse All Star" src="https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/816425/medium/tenis-chuck-70-seasonal-converse-all-star_26961.jpg"/>
            <p className="product-name">Chuck 70 Seasonal Converse All Star Marrom</p>
            <span className="product-price">R$ 349,90</span>
            <span className="product-variations">1 cor</span>
        </div>
    )
}

export default ProductCard;