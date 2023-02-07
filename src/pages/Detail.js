import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MealDetail from '../components/MealDetail';
import useFetch from '../hooks/useFetch';

const Detail = ({ route }) => {

    const { idMeal } = route.params;

    const { data } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);

    const renderMeal = ({ item }) => <MealDetail meal={item} />

    return (
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeal}
            />
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2'
    }
})