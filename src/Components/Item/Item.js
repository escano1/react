import { Link } from "react-router-dom"

const Item = ({id,name,img, price, stock}) => {

    return (
      

    <div className="columns is-centered">
      <div className="column is-one-quarter">
        <article className="box has-text-centered is-rounded">
          <header>
            <h2 className="title is-4">{name}</h2>
          </header>
          <div className="is-flex is-align-items-center is-justify-content-center">
            <img className="image is-128x128" src={img} alt={name} />
          </div>
          <section>
            <p className="subtitle is-6">Precio: ${price}</p>
            <p className="subtitle is-6">Stock disponible: {stock}</p>
          </section>
          <footer>
            <Link to={`/item/${id}`} className="button is-primary">
              Ver detalle
            </Link>
          </footer>
        </article>
      </div>
    </div>
    
    )
}

export default Item;