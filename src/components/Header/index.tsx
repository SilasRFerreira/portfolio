const Header = () => {
    return(
        <header>
            <div className="flex justify-between items-center w-11/12 h-16">
                <div>
                    <img src="" alt="foto de perfil" />
                    <h3>Silas Ferreira</h3>
                </div>
                <div>
                    <a href="https://wa.me/5521968383002" target="_blank">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="https://github.com/SilasRFerreira" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/silas-ferreira-1b4552101/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header