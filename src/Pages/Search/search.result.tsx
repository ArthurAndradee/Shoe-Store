import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/footer';
import ProductCard from '../../Components/ProductsRow/ProductCard/product.card';
import { products } from '../../Database/products';
import './search.result.css'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useLocalStorage } from '../../Context/context';

function SearchResult() {
    const [showCartItemsQuantity, setShowCartItemsQuantity] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const {cartProducts} = useLocalStorage()
  
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearchTerm(searchTerm);
    };
  
    useEffect(() => {
      if (cartProducts?.length) {
        setShowCartItemsQuantity(true);
      } else {
        setShowCartItemsQuantity(false)
      }
  
    }, [showCartItemsQuantity, cartProducts]);
    
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    var sliderSettings = {
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    }

    return (
        <div>
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
                      <div className='shopTitle'><Link to={'/home'} style={{color:"#000000", textDecoration:"none"}}>SHOESHOP</Link></div>
                      <img alt='logo' src='https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Icon-Logo.wine.svg' />  
                  </div>

                  <div className='navTitleBox'>
                      <div className='navTitle'><a href={'/femininos'} className='navLink'>Feminino</a></div>
                      <div className='navTitle'><a href={'/masculinos'} className='navLink'>Masculinos</a></div>
                      <div className='navTitle'><a href={'/edicao-limitada'} className='navLink'>Edição Limitada</a></div>
                      <div className='navTitle'><a href={'/promocoes'} className='navLink'>Promoções</a></div>
                  </div>

                  <div className='userOptions'>
                      <div>Entrar</div>
                      <div><Link to={'/wishlist'} style={{color:'#000000'}}><FontAwesomeIcon icon={faHeart} /></Link></div>
                      <div style={{display:'flex'}}>
                          <Link to={'/cart'} style={{color:'#000000'}}><FontAwesomeIcon icon={faCartShopping} /></Link>
                          {showCartItemsQuantity ? (
                            <>
                            <div className='items-count'>{cartProducts?.length}</div>
                            </>
                          ):(
                            <>
                            </>
                          )}
                      </div>
                  </div>
                  <form className='searchBar' onSubmit={handleSubmit}>
                    <input type='text' className='search-text' placeholder='Digite aqui...' onChange={handleSearchInputChange}/>
                    <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                  </form> 
              </nav> 
            </header>
            <div className="category-products search-container">
                {filteredProducts.map((product) => (
                    <ProductCard
                        imgAlt={product.imgAlt}
                        imgLink={product.imgLink}
                        name={product.name}
                        price={product.price}
                        discountedPrice={product.discountedPrice}
                        variations={product.variations}
                        productUrl={product.productUrl}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default SearchResult;