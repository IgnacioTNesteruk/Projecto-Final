import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FAVORITE } from "../data/Favorite";
import CartItem from "../components/CartItem";

const FavoriteScreen = () => {

    const handleDeleteItem = (id) => {
        console.log(id)
    }

    const renderFavoriteItem = ({ item }) => (
        <CartItem item={item}  onDelete={handleDeleteItem}/>
    )

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={FAVORITE}
                    keyExtractor={item => item.id}
                    renderItem={renderFavoriteItem}
                />
            </View>
{/*              <View style={styles.footer} >
                <TouchableOpacity
                    style={styles.confirm}
                    onPress={() => console.log("")}
                >
                    <Text>Confirmar</Text>
                </TouchableOpacity>
            </View>  */}
        </View>
    );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: "white",
        //paddingBottom: 120,
    },
    list: {
        flex: 3,
    },
/*     footer: {
        flex: 1,
        padding: 12,
        borderTopColor: "#ccc",
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }, */
});
