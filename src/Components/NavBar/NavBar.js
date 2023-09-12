import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return (

        <nav className="container">
            <div className="columns is-centered">
                <div className="has-text-centered">
                    <h3 className="title is-2 py-6">Servicios</h3>
                    <div className="buttons">
                        <button className="button is-info">Instalacion electrica</button>
                        <button className="button is-info">Diseño</button>
                        <button className="button is-info">Mantenimiento</button>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-2">
                            <div className="image is-48x48 has-text-centered">
                                <CartWidget/> 
                            </div> 
                        </div>                       
                    </div>
                </div>           
            </div>                
        </nav>
    )
}

export default NavBar;