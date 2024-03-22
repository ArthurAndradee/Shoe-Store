import LanguageHeader from '../LanguagePage/header';
import './app.css';

function MainHeader() {
  return (
    <div className='app'>
        <div className='offersCarousel'>BRUH WTF</div>
        <nav>
            <div className='logoBox'>
                <div className='shopTitle'>SHOESHOP</div>
                <img alt='logo' src='https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Icon-Logo.wine.svg' />
            </div>
            <div className='navTitleBox'>
                <div className='navTitle'>Feminino</div>
                <div className='navTitle'>Masculino</div>
                <div className='navTitle'>Infantil</div>
                <div className='navTitle'>Edição Limitada</div>
                <div className='navTitle'>Promoção</div>
            </div>
            <div className='userOptions'>
                <div>Entrar</div>
                <div>Heart</div>
                <div>🛒</div>
            </div>
            <div className='searchBar'>
                <p>Buscar</p>
                <div>aL</div>
            </div>
        </nav>
    </div>
  );
}

export default MainHeader;
