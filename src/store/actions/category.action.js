import { categoryTypes } from "../types";

const { SELECT_CATEGORY } = categoryTypes;

//voy a recibir el id al clickear el elemento
export const selectCategory = (id) => ({
  //qué voy a actualizar? almaceno la categoria clickeada en el store
  //al realizar una accion en la ui (hacer click en categoria) se ejecuta una acción que despacha
  //(dispatch) en este caso la acción SELECT_CATEGORY
  type: SELECT_CATEGORY,
  categoryId: id,
});
