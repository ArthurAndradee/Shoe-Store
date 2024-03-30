import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './app.css'

function ProductMenu() {
    return (
        <div className='menu-container'>
            <div className='product-title'>Product Title</div>
            <div className='product-type'>Product type</div>
            <div className='price'>Price</div>
            <div className='product-catch-phrase'>Catch Phrase</div>
            <div className='product-variations'>Variations</div>
            <div className='dialog-container'>
                <div className='product-warning'>ALERTA! FORMA GRANDE.</div>
                <div className='product-suggestion'>Sugerimos que compre 1 número menor. </div>
                <div className='product-guide'>GUIA DE TAMANHOS</div>
            </div>
            <select>
                <option value="">Escolha um tamanho</option>
                <option value="dog">39</option>
                <option value="cat">40</option>
                <option value="hamster">41</option>
                <option value="parrot">42</option>
            </select>
            <div className='product-options'>
                <button className='product-cart'>Adicionar ao carrinho</button>
                <button className='product-wishlist'><FontAwesomeIcon icon={faHeart} /></button>
            </div>
        </div>
    )
}

export default ProductMenu;