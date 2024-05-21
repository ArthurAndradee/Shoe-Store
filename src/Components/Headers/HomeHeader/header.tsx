import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGripLines, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './header.css';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../../Context/context';
import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { products } from '../../../Database/products';

function Header() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isUserInMobile, setIsUserInMobile] = useState(false)
  const [showHeaderMenu, setShowHeaderMenu] = useState(false)
  const {cartProducts} = useLocalStorage()

  useEffect(() => {
    setIsUserLoggedIn(!!localStorage.getItem('authToken'));
    if (window.innerWidth < 600) {
      setIsUserInMobile(true)
    }
  }, []);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
  
      localStorage.setItem('authToken', tokenResponse.access_token);
      setIsUserLoggedIn(true);
    }
  });

  const logout = () => {
    localStorage.removeItem("authToken")
    setIsUserLoggedIn(false);
  }

  const individualCategories = Array.from(new Set(products.flatMap(product => product.category)));
  //Função FlatMap pega todos os valores de um array e apenas retorna os valores diferentes, sem repetição de valores iguais.
  
  return (
    <header className='app'>
      <div className="slider-container">
        <Slider infinite={true} speed={200} slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={2500} className='slider'>
            <h3 className='slider-text'>APROVEITE NOSSA PROMOÇÃO COM <h3 className='blueSliderText'><Link to={'/promocoes'} style={{textDecoration:'none'}}>ATÉ 50% OFF!</Link></h3></h3>
            <h3 className='slider-text'>NINGUÉM VÊ O MUNDO COMO NÓS {'>'} <h3 className='blueSliderText'><Link to={'/search'} style={{textDecoration:'none'}}>VEJA OS LANÇAMENTOS!</Link></h3></h3>
            <h3><h3 className='blueSliderText'>FRETE GRÁTIS</h3><h3 className='smallSliderText' style={{cursor:'pointer'}}>nas compras acima de R$350!</h3></h3>
        </Slider>
      </div>

      <nav>
          <div className='logoBox'> 
              {isUserInMobile && <FontAwesomeIcon icon={faGripLines} style={{margin:'0 0 10px 0px'}} onClick={() => setShowHeaderMenu(!showHeaderMenu)}/>}
              {showHeaderMenu && 
              <div className='mobile-dropdown'>
                {individualCategories.map((category) => (
                  <a href={`/categories/${category}`} className='navLink'><div className='navTitle' style={{marginLeft:'0'}}>{category}</div></a>
                ))}
                <div className='navTitle' style={{marginLeft:'0'}}><a href={'/categories/promocoes'} className='navLink'>Promoções</a></div>
                <div className='userOptions' style={{display:'flex', paddingRight:'50px'}}>
                  {isUserLoggedIn ? (
                    <div onClick={() => logout()}>Sair</div>
                  ) : (
                    <div onClick={() => login()}>Entrar</div>
                  )}
                  <div><Link to={'/wishlist'} style={{color:'#000000'}}><FontAwesomeIcon icon={faHeart} /></Link></div>
                  <div style={{display:'flex'}}>
                    <Link to={'/cart'} style={{color:'#000000'}}><FontAwesomeIcon icon={faCartShopping} /></Link>
                    {cartProducts?.length ? (<><div className='items-count'>{cartProducts?.length}</div></>):(<></>)}
                  </div>
                </div>
              </div>
              }
              <div className='shopTitle'><Link to={'/home'} style={{color:"#000000", textDecoration:"none"}}>SHOESHOP</Link></div>
              <img alt='logo' src='https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Icon-Logo.wine.svg' />  
          </div>

          <div className='navTitleBox'>
            {individualCategories.map((category) => (
              <div className='navTitle'><a href={`/categories/${category}`} className='navLink'>{category}</a></div>
            ))}
            <div className='navTitle'><a href={'/categories/promocoes'} className='navLink'>Promoções</a></div>
          </div>

          <div className='userOptions'>
            {isUserLoggedIn ? (
              <div onClick={() => logout()}>Sair</div>
            ) : (
              <div onClick={() => login()}>Entrar</div>
            )}
              <div><Link to={'/wishlist'} style={{color:'#000000'}}><FontAwesomeIcon icon={faHeart} /></Link></div>
              <div style={{display:'flex'}}>
                  <Link to={'/cart'} style={{color:'#000000'}}><FontAwesomeIcon icon={faCartShopping} /></Link>
                  {cartProducts?.length ? (<><div className='items-count'>{cartProducts?.length}</div></>):(<></>)}
              </div>
          </div>
          <div className='searchBar'>
            <Link to={'/search'} style={{display:'flex', textDecoration:'none', width:'190px'}}>
              <div className='search-text'>Buscar</div>
              <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </Link>
          </div> 
      </nav> 

    </header>
  );
}

export default Header;