import { View,StyleSheet,FlatList } from "react-native";
import React from "react";
import { GAMES } from "../data/games";
import ProductsItem from "../components/ProductsItem"

const VideoGamesScreen = ({ navigation, route }) => {

    const VideosGames = GAMES.filter(games => games.category === route.params.categoryId)

    const handleSelectedProduct =(item) =>{
        navigation.navigate("Detail",{
            product: item, 
            name: item.name,
        });
    };

    const renderProductItem = ({item}) => (
        <View style={styles.ProductsItem}>
            <ProductsItem item={item} onSelected={handleSelectedProduct}/>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
            data={VideosGames}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
            numbColumns={2}
            />
        </View>
    );
};

export default VideoGamesScreen; 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    ProductsItem:{
       height: 320,
       width:410,
    },
})