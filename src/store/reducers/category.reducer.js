import { categories } from "../../constants/data";
import { categoryTypes } from "../types";

const {SELECT_CATEGORY} = categoryTypes

const initialState = {
    categories: categories,
    selected: null
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        //voy a buscar el índice de la categoría clickeada y retornar una copia de mi estado inciial y actualizo "selected"
        case SELECT_CATEGORY: 
            const indexCategory = state.categories.findIndex(
                category => category.id === action.categoryId
            )
            if (indexCategory === -1) {
                return state
            }
            return {
                ...state,
                selected: state.categories[indexCategory]
            }
        default:
            return state
    }
}

export default categoryReducer