import MainHeader from "../Headers/MainHeader/app"
import "./app.css"

function WelcomePage() {
    return (
        <div>
            <MainHeader />
            <main>

                <div className="ads-container">

                    <div className='adBox'>
                        <div id="ad-1"></div>
                        <div id="ad-2">
                            <img  src="https://images-prod.dazeddigital.com/640/azure/dazed-prod/1360/7/1367251.jpg" alt="Shop shoe" />
                        </div>
                        <div id="ad-3">
                            <img src="https://www.ocarafashion.com/wp-content/uploads/2024/03/2197762698.jpg" alt="goth shoes" />
                        </div>
                    </div>
                    
                    <div className='adBox-2'>
                        <div id="ad-4"></div>
                        <div id="ad-5"></div>
                        <div id="ad-6"></div>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default WelcomePage