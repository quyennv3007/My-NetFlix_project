import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handel = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handel);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
