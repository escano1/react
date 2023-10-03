import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article className="box has-background-light has-text-centered">
        <header>
          <h2 className="title is-4">{name}</h2>
        </header>
        <div className="content">
          <picture className="is-flex is-align-items-center is-justify-content-center">
            <img className="image is-128x128" src={img} alt={name} />
          </picture>
          <section>
            <p>Categoria: {category}</p>
            <p>Descripcion: {description}</p>
            <p>Precio: ${price}</p>
          </section>
        </div>
        <footer>
          <ItemCount
            initial={1}
            stock={stock}
            onAdd={(quantity) => console.log("cantidad agregada", quantity)}
          />
        </footer>
      </article>
    )
}

export default ItemDetail