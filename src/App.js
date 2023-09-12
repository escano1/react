
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
function App(){
    return (
        //<div className="container">
          //  <div className="columns is-centered"> //className="column is-half has-text-centered"
                <div> 
                    <NavBar/>
                    <ItemListContainer  greeting={'Bienvenidos'}/>
                    
                </div> 
    )
}

export default App;