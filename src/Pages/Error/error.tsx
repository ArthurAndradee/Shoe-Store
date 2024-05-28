import { Link } from 'react-router-dom';
import './error.css'

function ErrorPage() {
    return (
        <div className='error-page'>            
            <h1 className='error-title'>?</h1>
            <h2 className='error-subtitle'>There was an error</h2>
            <Link className='link' to="/home">Go back</Link>
        </div>
    )
}

export default ErrorPage;