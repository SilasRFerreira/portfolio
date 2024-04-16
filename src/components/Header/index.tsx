const Header = () => {
    return(
        <header>
            <div className="flex justify-between items-center w-11/12 h-16">
                <div>
                    <img src="" alt="foto de perfil" />
                    <h3>Silas Ferreira</h3>
                </div>
                <div>
                    <a href="https://www.google.com">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </header>
    )
}

export default Header