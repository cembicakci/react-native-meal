import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const CategoryCard = ({ category }) => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
            <Text style={styles.text}>{category.strCategory}</Text>
        </View>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eceff1',
        margin: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderColor: '#BCAAA4',
        borderWidth: 1,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        borderRadius: 50,
        marginLeft: 3
    },
    text: {
        flex: 1,
        fontSize: 18,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 5,
    }
})