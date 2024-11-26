const productos = [
    {
        id: '1',
        name: 'POLO NIKE',
        stock: 5,
        price: 40,
        description: 'Polo Algodón Hombre Nike',
        img: '../src/assets/img/polo1.webp',
        category: 'nuevos'
    },
    {
        id: '2',
        name: 'POLO ADIDAS',
        stock: 20,
        price: 30,
        description: 'Polo Algodón Hombre Adidas',
        img: '../src/assets/img/polo2.webp',
        category: 'ofertas'
    },
    {
        id: '3',
        name: 'POLO PUMA',
        stock: 30,
        price: 50,
        description: 'Polo Algodón Hombre Puma',
        img: '../src/assets/img/polo3.jpg',
        category: 'mas vendidos'
    },
    {
        id: '4',
        name: 'CASACA ADIDAS',
        stock: 20,
        price: 100,
        description: 'Casaca Hombre Adidas',
        img: '../src/assets/img/casaca4.webp',
        category: 'nuevos'
    },
    {
        id: '5',
        name: 'CASACA LACOSTE',
        stock: 20,
        price: 250,
        description: 'Casaca Hombre Lacoste',
        img: '../src/assets/img/casaca2.jpg',
        category: 'ofertas'
    },
    {
        id: '6',
        name: 'CASACA MLB',
        stock: 10,
        price: 200,
        description: 'Casaca Hombre Mlb Varsity',
        img: '../src/assets/img/casaca3.jpg',
        category: 'mas vendidos'
    },
    {
        id: '7',
        name: 'PANTALON LACOSTE',
        stock: 30,
        price: 150,
        description: 'Pantalon Urbano Slim Hombre Lacoste',
        img: '../src/assets/img/pantalon1.jpg',
        category: 'nuevos'
    },
    {
        id: '8',
        name: 'PANTALON QUIKSILVER',
        stock: 20,
        price: 200,
        description: 'Pantalon Buzo Jogger Hombre Quiksilver',
        img: '../src/assets/img/pantalon2.jpg',
        category: 'ofertas'
    },
    {
        id: '9',
        name: 'PANTALON LEVIS',
        stock: 30,
        price: 300,
        description: 'Pantalon Casual Jogger Hombre Levis ',
        img: '../src/assets/img/pantalon3.webp',
        category: 'mas vendidos'
    }
]

export const getProducts = () =>{
    
    let error = false
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(error){
                reject('Error al cargar los productos')
            }else{
                resolve(productos)
            }
        },500)
    })
}

export const getOneProduct = (id) =>{
    let error = false
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(error){
                reject('No existe el producto')
            }else{
                let product = productos.find((item) => item.id === id)
                resolve(product)
            }
        },500)
    })
}