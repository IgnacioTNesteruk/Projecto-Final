import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";

const ProductsItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onSelected(item)}>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: "https://media.wired.com/photos/62feb60bcea7c0581e825cb0/4:3/w_2131,h_1598,c_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg" }} />
            </View>
            <View style={styles.textContainer}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>{item.release}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ProductsItem;