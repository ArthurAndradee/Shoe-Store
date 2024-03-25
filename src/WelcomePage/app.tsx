import MainHeader from "../Headers/MainHeader/app"
import "./app.css"

function WelcomePage() {
    return (
        <div>
            <MainHeader />
            <main>

                <div className="ads-container">

                    <section className='adBox'>
                        <div className="background-img" id="ad-1">
                            <h2 className="ad-title">Converse X Martine Ali</h2>
                            <p className="ad-description">Explore a fusão única de elementos clássicos e modernos nessa <br /> colaboração.</p>
                            <div className="ad-buyButton">COMPRE AGORA</div>
                        </div>
                        <div className="background-img" id="ad-2"></div>
                        <div className="background-img" id="ad-3"></div>
                    </section>
                    
                    {/* <div className='adBox-2'>
                        <div id="ad-4"></div>
                        <div id="ad-5"></div>
                        <div id="ad-6"></div>
                    </div> */}

                </div>

            </main>
        </div>
    )
}

export default WelcomePage