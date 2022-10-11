import React from "react";
import { FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";//Accede a los estados de nuestro store
import { selectCategory } from "../../store/actions";


//Todas las vistas que este dentro del stack reciben el navigation, que contiene todos los métodos disponibles del stack de navegación
//ej. el método navigate que nos dirige a las vistas disponibles
const Categories = ({ navigation }) => {
  const dispatch = useDispatch()
  //este selector me permite acceder a todo mi estado global, en este caso accedo a category
  const categories = useSelector(state => state.category.categories)

  const onSelected = (item) => {
    //dispatch es el método con el que ejecutamos la "acción" o función que edita nuestro estado global de categorías.
    //le pasamos por parámetro la id, que luego con un find lo usamos para actualizar nuestro
    //estado global con la categoría seleccionada
    dispatch(selectCategory(item.id))
    navigation.navigate("Products", { title: item.title });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.containerList}
    />
  );
};

export default Categories;
