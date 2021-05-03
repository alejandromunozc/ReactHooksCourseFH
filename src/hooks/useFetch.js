import { useState, useEffect, useRef } from 'react';

const initial = {
    data: null,
    loading: true,
    error: null
}

export const useFetch = (url) => {
    const isMounted = useRef(true)
    const [state, setstate] = useState(initial);

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setstate(initial);
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setstate({
                            loading: false,
                            error: null,
                            data
                        });
                    } else {
                        console.log('setState no se llamo');
                    }
                }, 3000);
            });
    }, [url])

    return state;
}