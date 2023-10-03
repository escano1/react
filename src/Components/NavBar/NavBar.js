import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return (

        <nav className="container">
            <div className="columns is-centered">
                <div className="has-text-centered">
                    <h3 className="title is-2 py-6"><Link to={'/'}>Servicios</Link></h3>
                    <div className="buttons">
                        
                        <button className="button is-link is-light"> 
                            <Link to={'/category/tableros'}>Instalacion electrica</Link> 
                        </button>
                        <button className="button is-link is-light">
                            <Link to={'/category/cables'}>Diseño</Link>
                        </button>
                        <button className="button is-link is-light">
                            <Link to={'/category/herramienta'}>Mantenimiento</Link>
                        </button>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-2">
                            <div className="image is-48x48 has-text-centered mb-5">
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