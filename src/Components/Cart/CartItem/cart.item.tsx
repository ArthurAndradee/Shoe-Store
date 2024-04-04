import './cart.item.css'

function CartItem() {
    return (
        <div className='items-container'>
            <div className='item-display'>
                <div className='item-img'></div>
                <div className='item-info'>
                    <div className='item-name'>One Star Academy Pro Preto</div>
                    <div className='item-specifications'>
                        <div className='item-variation'><b>Cor: </b> BLACK</div>
                        <div className='item-variation'><b>Tamanho: </b> 40</div>
                    </div>
                </div>
            </div>
            <div className='items-handle'>
                <input type="number" id="quantity" name="quantity" min="1" />
                <div className='item-functions'>
                    <div className='item-price'>R$579,90</div>
                    <div className='item-editing'>
                        <div className='item-wish'>MOVER PARA LISTA DE DESEJOS</div>
                        <div>REMOVER ITEM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;