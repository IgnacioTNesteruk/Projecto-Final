import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import React from "react";
import styles from "./styles";

const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text>{item.rating}</Text>
                    <Text>{item.release}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Entypo name="trash" size={25} color= "black"  />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem;