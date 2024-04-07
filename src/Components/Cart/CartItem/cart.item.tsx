import { Link } from 'react-router-dom';
import { useCart } from '../../../Context/cart.context';
import './cart.item.css'

function CartItem() {
    const {cartProducts} = useCart()

    if(!cartProducts || cartProducts.length == 0) {
        return (
            <div className='p-3'>
                <div>Você não possui nenhum item em seu carrinho de compras.</div>
                <div>
                    Clique
                    <Link className='m-1 home-link' to={'/home'}>
                        aqui
                    </Link>
                    para continuar comprando.
                </div>
            </div>
        )
    }

    return (
        <div className='items-container'>
            {cartProducts && cartProducts.map((product) => {
                return (
                    <div className='items-list'>
                        <div className='item-display'>
                            <div className='item-img' style={{backgroundImage:"url(" + product.imgLink + ")" }}></div>
                            <div className='item-info'>
                                <div className='item-name'>{product.name}</div>
                                <div className='item-specifications'>
                                    <div className='item-variation'><b>Cor: </b> BLACK</div>
                                    <div className='item-variation'><b>Tamanho: </b> 40</div>
                                </div>
                            </div>
                        </div>
                        <div className='items-handle'>
                            <input type="number" id="quantity" name="quantity" min="1" />
                            <div className='item-functions'>
                                <div className='item-price'>{product.price}</div>
                                <div className='item-editing'>
                                    <div className='item-wish'>MOVER PARA LISTA DE DESEJOS</div>
                                    <div className='item-remove'>REMOVER ITEM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CartItem;