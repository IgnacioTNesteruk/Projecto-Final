import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/categories";
import CategoriesItem from "../components/CategoriesItem";

const CategoryScreen = ({ navigation }) => {

   const handleSelectedCategory  = item =>{
        navigation.navigate("VideoGames",{
            categoryId: item.id,
            name: item.title
        });
    } 

    const renderCategoriesItem = ({item}) =>(
        <View style={styles.categoriesContainer}>
            <CategoriesItem item={item} onSelected={handleSelectedCategory}/>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderCategoriesItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    categoriesContainer:{
        padding: 15,
        height: 150,
    }
});
