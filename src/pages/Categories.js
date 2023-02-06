import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CategoryCard from '../components/CategoryCard';
import useFetch from '../hooks/useFetch'

const Categories = ({ navigation }) => {

    const { data } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    const onSelect = (strCategory) => {
        navigation.navigate('Meals', { strCategory })
    }

    const renderCategory = ({ item }) => <CategoryCard category={item} onSelect={() => onSelect(item.strCategory)} />
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.categories}
                renderItem={renderCategory}
            />
        </SafeAreaView>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffa500',
    }
})