const Header = () => {
    return(
        <header>
            <div className="flex justify-between items-center">
                <div>
                    <img src="" alt="foto de perfil" />
                    <h3>Silas Ferreira</h3>
                </div>
                <div className="flex">
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
                    <div>
                        <i className="fa-solid fa-lightbulb"></i>
                        <i className="fa-regular fa-lightbulb"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header