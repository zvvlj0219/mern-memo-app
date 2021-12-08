import logo from '../assets/logo.png'

const Header = () =>{

  return (
    <div className="header">
      <div>
        <img src={logo} alt=''/>
        <p>React memo app</p>
      </div>
      <p>email adress</p>
    </div>
  )
}

export default Header