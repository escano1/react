
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import "bulma/css/bulma.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(){
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route exact path={'/'} element={<ItemListContainer />}/>
                    <Route exact path={'/category/:categoryId'} element={<ItemListContainer />}/>
                    <Route exact path={'/item/:itemId'} element={<ItemDetailContainer />}/>
                    <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>

                </Routes>
   
        </BrowserRouter>

        /*
        <Route exact path={'/item/:id'} element={<ItemDetailContainer/>}/>
        */

    )
}

export default App;