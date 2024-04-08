import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './product.card.css'
import { Link } from "react-router-dom";

interface ProductCardProps {
    imgAlt: string,
    imgLink: string,
    name: string,
    price: number,
    variations: string,
    productUrl: string,
}

function ProductCard(props: ProductCardProps) {
    return (
        <div className="product">
            <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            <Link key={props.productUrl} to={`/products/${props.productUrl}`} className="product-link">
                <img alt={props.imgAlt} src={props.imgLink}/>
                <p className="product-name">{props.name}</p>
            </Link>
            <span className="product-price">R$ {props.price + '0'}</span>
            <span className="product-variations">{props.variations}</span>
        </div>
    )
}
 
export default ProductCard;