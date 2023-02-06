import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MealCard from '../components/MealCard';
import useFetch from '../hooks/useFetch';

const Meals = ({ route }) => {

    const { strCategory } = route.params;

    const { data } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);

    const renderMeals = ({ item }) => <MealCard meal={item} />

    return (
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeals}
            />
        </View>
    )
}

export default Meals

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa500',
        padding: 10,
    }
})