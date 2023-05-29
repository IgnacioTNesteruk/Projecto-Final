import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect } from "react";
import ProductsItem from "../components/ProductsItem"
import { useSelector,useDispatch } from "react-redux";
import {setFilteredGames,selectedGames} from "../store/actions/games.action";
 

const VideoGamesScreen = ({ navigation }) => {

    const filteredGames = useSelector(state => state.games.filteredGames);
    const categorySelected = useSelector(state => state.categories.selected);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFilteredGames(categorySelected.id));
    }, [])

    const handleSelectedProduct = item => {
        dispatch(selectedGames(item.id))
        navigation.navigate("Detail", {
            name: item.name,
        });
    };

    const renderProductItem = ({ item }) => (
        <View style={styles.ProductsItem}>
            <ProductsItem item={item} onSelected={handleSelectedProduct} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredGames}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
                numbColumns={2}
            />
        </View>
    );
};

export default VideoGamesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    ProductsItem: {
        height: 320,
        width: 410,
    },
})