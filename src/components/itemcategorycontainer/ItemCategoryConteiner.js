import { useParams } from 'react-router-dom'
import ItemCategory from '../ItemCategory/ItemCategory';


const ItemCategoryConteiner = () => {

   const { categoriaId } = useParams();
 
  return (
    <div className="categoria-style">
        
      <ItemCategory categoria={categoriaId}></ItemCategory>
      
    </div>

  )


}


export default ItemCategoryConteiner