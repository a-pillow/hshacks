import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
    const [value, setValue] = useState(DEFAULT_VALUES);

    useEffect(() => {
        const stored = localStorage.getItem(key);
        setValue(stored ? JSON.parse(stored) : DEFAULT_VALUES);
    }, [key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

const DEFAULT_VALUES = [
    {
        date: 1681570277995,
        mood: "angry"
    }
]