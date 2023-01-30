import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCategoryConteiner from '../itemcategorycontainer/ItemCategoryConteiner'


const ItemCategory = (props) => {

    const [lista, setLista] = useState([])
    const { categoriaId } = useParams()

    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => res.json())
            .then(productos => setLista(productos.filter((p) => p.categoria === categoriaId)))
    }, [categoriaId]);
console.log(categoriaId)
    return (

        <div >
            <p>Este es el item List</p>
            <ItemCategoryConteiner key={lista.categoria} id={"producto" + lista.categoria} data={lista} />
            {lista}
        </div>

    )

}

export default ItemCategory
