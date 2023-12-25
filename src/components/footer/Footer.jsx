import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"><a href="#!"><img src="/icons/vk.svg" alt="Link"/></a></li>
            <li className="social__item"><a href="#!"><img src="/icons/gitHub.svg" alt="Link"/></a></li>
          </ul>
          <div className="copyright">
            <p>© 2023 </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;