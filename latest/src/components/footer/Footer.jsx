import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Avinash Chalak</h1>
            <ul className="footer__list">
                <li>
                    <a href="#About" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#Portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#Contact" className="footer__link">Contact Me</a>
                </li>
            
            </ul>
            
            <div className="footer__social">
            <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
        <i className="bx bxl-instagram"></i>
        </a>
        
        <a href="https://www.twitter.com" className="footer__social-link" target="_blank">
        <i class="bx bxl-twitter"></i> 
        </a>

        <a href="https://www.github.com/" className="footer__social-link" target="_blank">
        <i className="bx bxl-github"></i>
        </a>
            </div>

            <span className="footer__copy">
                AvinashChalak. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
