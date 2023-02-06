import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const MealCard = ({ meal }) => {

    console.log(meal)

    return (
        <View style={styles.container}>
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{meal.strMeal}</Text>
        </View>
    )
}

export default MealCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: 10,
        marginVertical: 5
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 5,
        resizeMode: 'cover'

    },
    text: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        width: '100%',
        textAlign: 'right',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 3,
        paddingRight: 10
    }
})