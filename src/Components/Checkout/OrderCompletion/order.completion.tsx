import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/footer';
import Header from '../../Headers/HomeHeader/header';
import './order.completion.css'

function OrderCompletion () {
    return (
        <div>
            <Header />
            <div className='order-section'>
                <div className='order-title'>
                    <h1 id='title'>Compra finalizada <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:'1.5rem', marginLeft:'5px'}} /></h1>
                    <div>Clique <Link to={'/home'} id='comeback-link'>aqui</Link> para voltar</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderCompletion;