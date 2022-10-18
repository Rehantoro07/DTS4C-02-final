import './Header.css'
import search from '../../assets/search.png'
import hamburger from '../../assets/hamburger.png'

const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <div className='brand'>
          <span>News</span>
          <span>Portal</span>
        </div>
        <div className='right-nav'>
          <img src={search} alt="" />
          <img src={hamburger} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header