import {Link} from "react-router-dom"

import "./RecetasCard.css"

export const RecetasCard = ({ receta }) => {
  const imgURL=`https://spoonacular.com/recipes/${receta.image}`;
  
 
  return (
    <li className="recetasCard">
      <Link to={`/receta/${receta.id}`}>
      <img className="recetaImage" src={imgURL} alt={receta.title} />
      <div>{receta.title}</div>
      </Link>
    </li>
  );
};
