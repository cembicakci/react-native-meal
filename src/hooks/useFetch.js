import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, error, loading }
}

export default useFetch