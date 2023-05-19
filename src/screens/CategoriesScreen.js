import { View,  StyleSheet,  FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/categories";
import CategoriesItem from "../components/CategoriesItem";


const CategoriesScreen = ({navigation}) => {

    const handleSelectedCategory = item => (navigation.navigate(item.screen), {params})
    

    const renderCategoriesItem = ({ item }) =>(
        <View style ={styles.categoriesConatiner}>
            <CategoriesItem item={item} onSelected={handleSelectedCategory}/>
        </View>
    );

    return (
        <View style ={styles.container}>
            <FlatList 
            data={CATEGORIES}
            renderItem={renderCategoriesItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "white",
    },  
    categoriesConatiner:{
        padding: 15,
        height: 185,
    }
})

