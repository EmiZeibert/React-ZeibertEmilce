import { useState, useEffect } from "react"
import ItemList from '../itemlist/ItemList';
import './ItemListContainer.css'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../service/FireBase";
import { useNavigate, useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [lista, setLista] = useState([])
  const { categoriaId } = useParams();
    const navegar = useNavigate()
   useEffect(() => {
    const getData = async () => {
      const queryRef = categoriaId
          ? query(
              collection(db, "listaproductos"),
              where("categoria", "==", categoriaId)
          )
          : collection(db, "listaproductos");

      const response = await getDocs(queryRef);
      const docsInfo = response.docs.map((doc) => {
          const newDoc = {
              id: doc.id,
              ...doc.data(),
          };
          return newDoc;
      });
      setLista(docsInfo);
  };
  getData();
  }, [categoriaId]);

  return (
    <div className="categoria-style">
      <div className="categoria-1">
        <button className="botonC" onClick={() => navegar('/productos')}>Todos los productos</button>
        <button className="botonC" onClick={() => navegar('/productos/Audio y video')}>Audio-video </button>
        <button className="botonC" onClick={() => navegar('/productos/Celulares y notebook')}>Celulares-notebook</button>
      </div>
      <div className="productosc" >
        <ItemList lista={lista} />
      </div>
    </div>

  )

}

export default ItemListContainer

