import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocalStorage } from '../../../Context/context';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../..";
import './product.card.css'

interface ProductCardProps {
    imgAlt: string,
    imgLink: string,
    name: string,
    price: number,
    discountedPrice: number,
    variations: string,
    productUrl: string,
    product: Product
}

function ProductCard(props: ProductCardProps) {
    const {handleAddProductToWishlist} = useLocalStorage()
    const [heartColor, setHeartColor] = useState("#000000");

    function AddProductToWishlist() {
        setHeartColor("#898989");
        handleAddProductToWishlist(props.product);
        setTimeout(() => setHeartColor("#000000"), 1000)
    }

    const [doesItemHaveDiscount] = useState(props.discountedPrice > 0);

    return (
        <div className="product">
            <div className="heart-icon">
                <FontAwesomeIcon 
                    icon={faHeart} 
                    onClick={AddProductToWishlist} 
                    style={{color: heartColor, transition:'all 500ms'}}
                />
            </div>
            <Link key={props.productUrl} to={`/products/${props.productUrl}`} className="product-link"> 
                <img alt={props.imgAlt} src={props.imgLink}/>
                <p className="product-name">{props.name}</p>
            </Link>
            <span className="product-price">R$
                {doesItemHaveDiscount ? (
                    <>
                    <div className="product-price-discount">{props.price.toFixed(2)}</div> {props.discountedPrice.toFixed(2)}
                    </>
                ) : (
                    <>
                    {props.price.toFixed(2)}
                    </>
                )}
            </span>
            <span className="product-variations">{props.variations}</span>
        </div>
    )
}
 
export default ProductCard;