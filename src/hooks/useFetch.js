import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, error }
}

export default useFetch