import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './app.css'

interface ProductInfo {
    name: string,
    type: string,
    price: string,
    catchPhrase: string,
}

function ProductMenu(props: ProductInfo) {

    return (
        <div className='menu-container'>
            <h3 className='product-title'>{props.name}</h3>
            <div className='product-type'>{props.type}</div>
            <div className='price'>R$ {props.price}</div>
            <div className='product-catch-phrase'>{props.catchPhrase}</div>
            
            <div className='warning-container'>
                <div className='warning'>
                    <div className='product-warning'>ALERTA! FORMA GRANDE.</div>
                    <div className='product-suggestion'>Sugerimos que compre 1 número menor. </div>
                </div>
                <a href='https://cdnv2.moovin.com.br/margilcalcados/imagens/produtos/det/tenis-converse-all-star-lona-ct00100007-chuck-taylor-a308c915b1fcc51eec63d8df5cb636aa.jpg' target='_blank' className='product-guide' rel="noreferrer">GUIA DE TAMANHOS</a>
            </div>
            <select
            id='select' className="form-select" aria-label="Default select example">
                <option selected>Escolha um tamanho</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
            </select>
            <div className='product-options'>
                <button className='btn btn-primary' id='cart-button'>Adicionar ao carrinho</button>
                <button className='btn btn-primary' id='wish-button'><FontAwesomeIcon icon={faHeart} /></button>
            </div>
        </div>
    )
}

export default ProductMenu;