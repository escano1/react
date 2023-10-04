import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory,getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting })=>{

    const [products,setProducts] = useState([]);

    const { categoryId } = useParams()

    console.log(categoryId)

    useEffect(() => {

        const asyncFunc = categoryId ? getProductByCategory : getProducts


        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })


    }, [categoryId])
    

    return (
        <div className="has-text-centered title is-1 py-6 has-text-primary">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;