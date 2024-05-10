import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [error, serError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => serError(err))
            .finally(() => setLoading(false))
        }
        fetchData();
    }, [url])

    return [loading, data, error];
};  

export default useFetch;

