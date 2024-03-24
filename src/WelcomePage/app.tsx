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
                        <div id="ad-2"></div>
                        <div id="ad-3"></div>
                    </div>
                    
                    <div className='adBox'>
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