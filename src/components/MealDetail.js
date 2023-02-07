import React from 'react'
import { Button, Dimensions, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MealDetail = ({ meal }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
            <View style={styles.content}>
                <View style={styles.titleContent}>
                    <Text style={styles.title}>{meal.strMeal}</Text>
                    <Text style={styles.area}>{meal.strArea}</Text>
                </View>
                <Text style={styles.desc}>{meal.strInstructions}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => Linking.openURL(`${meal.strYoutube}`)}>
                    <Text style={styles.btnText}>Watch on Youtube</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MealDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3
    },
    content: {
    },
    titleContent: {
        borderBottomWidth: 1,
        borderBottomColor: '#bdbdbd'
    },
    title: {
        color: '#ae4343',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 5
    },
    area: {
        color: '#ae4343',
        fontWeight: 'bold',
        fontSize: 20,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    desc: {
        padding: 5
    },
    btn: {
        backgroundColor: 'red',
        marginTop: 15,
        marginBottom: 50,
        borderRadius: 8,
        padding: 15,
        marginHorizontal: 12
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
})