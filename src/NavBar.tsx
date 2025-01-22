import csLogo from './assets/csLogo.jpg'
import './NavBar.css'

export default function NavBar() {
  return (
    <>
      <div className='nav-ctn'>
        <img src={csLogo} id='logo'></img>
        <span>Welcome to the Snow College CS Club!</span>
      </div>
    </>
  );
}
