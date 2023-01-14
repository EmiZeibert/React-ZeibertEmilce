import Producto from '../producto/Producto';
import notebook65000 from "./img/notebook65000.jpg"
import notebook85000 from "./img/notebook85000.jpg"
import parlante10500 from "./img/parlante10500.jpg"
import parlante20000 from "./img/parlante20000.jpg"
import samsunga03 from "./img/samsunga03.jpg"
import motorolae20 from "./img/motorolae20.jpg"
import smart43 from "./img/smart43.jpg"
import smart32 from "./img/smart32.jpg"
import auricular2500 from "./img/auricular2500.jpg"
import auricular5000 from "./img/auricular5000.jpg"
import tablet45000 from "./img/tablet45000.jpg"
import tablet54000 from "./img/tablet54000.jpg"




import './ListaProductos.css'


const ListaProductos = (props) => {

    const listaDeProductos=[
        {
            id: "notebook-Exo",
            nombre: "Notebook Exo",
            imagen: notebook65000,
            categoria:"Celulares-notebook",
            precio: 85000,
            stock: 22
        },
        {
            id: "notebook-Acer",
            nombre: "Notebook Acer",
            imagen: notebook85000,
            categoria:"Celulares-notebook",
            precio: 65000,
            stock: 20
        },
        {
            id: "parlante-Chico",
            nombre: "Parlante Chico",
            imagen: parlante10500,
            categoria:"Audio-video",
            precio: 10500,
            stock: 28
        },
        {
            id: "parlante-Grande",
            nombre: "Parlante Grande",
            imagen: parlante20000,
            categoria:"Audio-video",
            precio: 20600,
            stock: 25
        },
        {
            id: "celular-Samsung A03",
            nombre: "Celular SamsungA03",
            imagen: samsunga03,
            categoria:"Celulares-notebook",
            precio: 52000,
            stock: 15
        },
        {
            id: "celular-Motorola-e20",
            nombre: "Celular MotorolaE20",
            imagen: motorolae20,
            categoria:"Celulares-notebook",
            precio: 34000,
            stock:24
        },
        {
            id: "smartv-43p",
            nombre: "Smartv 43p",
            imagen: smart43,
            categoria:"Audio-video",
            precio: 73000,
            stock:26

        },
        {
            id: "smartv-32p",
            nombre: "Smartv 32p",
            imagen: smart32,
            categoria:"Audio-video",
            precio: 45000,
            stock:23
        },
        {
            id: "auricular-Newvision",
            nombre: "Auricular Newvision",
            imagen: auricular2500,
            categoria:"Audio-video",
            precio: 2500,
            stock:12
        },
        {
            id: "auricular-Redragon",
            nombre: "Auricular Redragon",
            imagen: auricular5000,
            categoria:"Audio-video",
            precio: 5000,
            stock:11
        },
        {
            id: "tablet",
            nombre:"Tablet Lenovo",
            imagen: tablet45000,
            categoria:"Audio-video",
            precio: 45000,
            stock:19
        },
        {
            id: "tablet-Lenovo",
            nombre: "Tablet Lenovo",
            imagen: tablet54000,
            categoria:"Audio-video",
            precio: 54000,
            stock:15
        },

    ]
//quedecon esto//

let ProductosHTML
let listaCategoria

if (props.categoria === "Todos los productos"){
     ProductosHTML=listaDeProductos.map(elementos => <Producto key={elementos.id} data={elementos}  />)
}else{
    listaCategoria =listaDeProductos.filter(elementos=>elementos.categoria === props.categoria)
     ProductosHTML=listaCategoria.map(elementos => <Producto key={elementos.id} data={elementos}  />)
}
   
    


    return (
       <div className='productoscard'>
                    {ProductosHTML}
            </div>
    )

}

export default ListaProductos;