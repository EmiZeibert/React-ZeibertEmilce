import Producto from '../producto/Producto';

import './ListaProductos.css'


const ListaProductos = () => {

    const listaDeProductos=[
        {
            id: "notebook-Exo",
            nombre: "Notebook Exo",
            imagen: "../img/notebook65000.jpg",
            categoria:"Celulares-notebook",
            precio: 85000,
            stock: 22
        },
        {
            id: "notebook-Acer",
            nombre: "Notebook Acer",
            imagen: "../img/notebook85000.jpg",
            categoria:"Celulares-notebook",
            precio: 65000,
            stock: 20
        },
        {
            id: "parlante-Chico",
            nombre: "Parlante Chico",
            imagen: "../img/parlante10500.jpg",
            categoria:"Audio-video",
            precio: 10500,
            stock: 28
        },
        {
            id: "parlante-Grande",
            nombre: "Parlante Grande",
            imagen: "../img/parlante20000.jpg",
            categoria:"Audio-video",
            precio: 20600,
            stock: 25
        },
        {
            id: "celular-Samsung A03",
            nombre: "Celular SamsungA03",
            imagen: "../img/samsunga03.jpg",
            categoria:"Celulares-notebook",
            precio: 52000,
            stock: 15
        },
        {
            id: "celular-Motorola-e20",
            nombre: "Celular MotorolaE20",
            imagen: "../img/motorolae20.jpg",
            categoria:"Celulares-notebook",
            precio: 34000,
            stock:24
        },
        {
            id: "smartv-43p",
            nombre: "Smartv 43p",
            imagen: "../img/smart43.jpg",
            categoria:"Audio-video",
            precio: 73000,
            stock:26

        },
        {
            id: "smartv-32p",
            nombre: "Smartv 32p",
            imagen: "../img/smart32.jpg",
            categoria:"Audio-video",
            precio: 45000,
            stock:23
        },
        {
            id: "auricular-Newvision",
            nombre: "Auricular Newvision",
            imagen: "../img/auricular2500.jpg",
            categoria:"Audio-video",
            precio: 2500,
            stock:12
        },
        {
            id: "auricular-Redragon",
            nombre: "Auricular Redragon",
            imagen: "../img/auricular5000.jpg",
            categoria:"Audio-video",
            precio: 5000,
            stock:11
        },
        {
            id: "tablet",
            nombre:"Tablet Lenovo",
            imagen: "../img/tablet45000.jpg",
            categoria:"Audio-video",
            precio: 45000,
            stock:19
        },
        {
            id: "tablet-Lenovo",
            nombre: "Tablet Lenovo",
            imagen: "../img/tablet54000.jpg",
            categoria:"Audio-video",
            precio: 54000,
            stock:15
        },

    ]
//quedecon esto//
    const listaCategoria =listaDeProductos.filter(elementos=>elementos.categoria == props.categoria)

    const ProductosHTML=listaDeProductos.map(elementos => <Producto key={elementos.id} data={elementos}  />)


    return (
       <div>
            <p>
                2.lista
            </p>
            {ProductosHTML}
            </div>
    )

}

export default ListaProductos;