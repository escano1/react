const products =[
    {
        id:'1',
        name: 'Tablero',
        price: 1000,
        category: 'tableros',
        img : 'https://www.eimpsa.com/web/wp-content/uploads/2018/12/Distribucion-600x600.png',
        stock: 25,
        description : 'Descripcion tablero'

    },

    {
        id:'2',
        name: 'Cables',
        price: 1000,
        category: 'cables',
        img : 'https://homecenterco.scene7.com/is/image/SodimacCO/274255?fmt=webp&fit=fit,1&wid=200&hei=200',
        stock: 25,
        description : 'Descripcion de cable'

    },

    {
        id:'3',
        name: 'Atornillador electrico',
        price: 1000,
        category: 'herramienta',
        img : 'https://electroservimos.co/894-home_default/caja-con-placa-ecualizable-bronce-para-piso-o-mesa-3-servicios-ip44-indigo-veto.jpg',
        stock: 25,
        description : 'Descripcion de atornillador'

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })

}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === categoryId);
            resolve(filteredProducts)
        },500)
    })
}