import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './app.css'

interface ProductCardProps {
    imgAlt: string,
    imgLink: string,
    name: string,
    price: string,
    variations: string
}

function ProductCard(props: ProductCardProps) {
    return (
        <div className="product">
            <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            <img alt={props.imgAlt} src={props.imgLink}/>
            <p className="product-name">{props.name}</p>
            <span className="product-price">R$ {props.price}</span>
            <span className="product-variations">{props.variations}</span>
        </div>
    )
}

export default ProductCard;