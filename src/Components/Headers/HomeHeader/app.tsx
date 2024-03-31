import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './app.css';


function HomeHeader() {

  var sliderSettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <header className='app'>

      <div className="slider-container">
        <Slider {...sliderSettings} className='slider'>
            <h3 className='slider-text'>APROVEITE NOSSA PROMOÇÃO COM <h3 className='blueSliderText'>ATÉ 50% OFF!</h3></h3>
            <h3 className='slider-text'>NINGUÉM VÊ O MUNDO COMO NÓS {'>'} <h3 className='blueSliderText'> VEJA OS LANÇAMENTOS!</h3></h3>
            <h3><h3 className='blueSliderText'>FRETE GRÁTIS</h3><h3 className='smallSliderText'>nas compras acima de R$350!</h3></h3>
        </Slider>
      </div>

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
              <div><FontAwesomeIcon icon={faHeart} /></div>
              <div><FontAwesomeIcon icon={faCartShopping} /></div>
          </div>

          <div className='searchBar'>
              <p>Buscar</p>
              <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          </div>
          
      </nav> 

    </header>
  );
}

export default HomeHeader;