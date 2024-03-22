import './main.css';

function LanguagePage() {
  return (
    <div className="Main">
        <div className='selectionText'>Select Location & Language</div>
        <div className='contentBox'>
            <h1 className='continent'>AMERICAS
              <ul>
                <li>Brazil</li>
                <li>Canada</li>
                <li>United States</li>
                <li>Mexico</li>
              </ul>
            </h1>
            <h1 className='continent'>EUROPE
              <ul>
                <li>Belguim</li>
                <li>Czech Republic</li>
                <li>Denmark</li>
                <li>Germany</li>
                <li>España | Spain</li>
                <li>Finland</li>
                <li>France</li>
                <li>Great Britain</li>
                <li>Hrvatska</li>
                <li>Ireland</li>
                <li>Italy</li>
                <li>Luxembourg</li>
                <li>Hungary</li>
                <li>Netherlands</li>
                <li>Austria</li>
                <li>Poland</li>
                <li>Portugal</li>
                <li>Serbia</li>
                <li>Turkey</li>
              </ul>
            </h1>
            <h1 className='continent'>ASIA PACIFIC
              <ul>
                <li>Australia</li>
                <li>China</li>
                <li>India</li>
                <li>Indonesia</li>
                <li>Korea</li>
                <li>Philippines</li>
              </ul>
            </h1>
            <h1 className='continent'>AFRICA
              <ul>
                <li>South Africa</li>
              </ul>
            </h1>
        </div>
    </div>
  );
}

export default LanguagePage;