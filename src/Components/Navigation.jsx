import './Navigation.css'
import logo from '../Assets/spacelogo.svg'

const Navigation = () => {
  return (
    <div className='main'>
      <img src={logo} alt="" />

      <div className="line"></div>
      
      <div className="nav">
          <div className="nav-txt">
              <div className="copy">
                  <p>00</p>
                  <p>HOME</p>
              </div>
              <div className="copy">
                  <p>01</p>
                  <p>DESTINATION</p>
              </div>
              <div className="copy">
                  <p>02</p>
                  <p>CREW</p>
              </div>
              <div className="copy">
                  <p>03</p>
                  <p>TECHNOLOGY</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navigation
