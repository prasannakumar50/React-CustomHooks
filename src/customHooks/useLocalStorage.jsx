import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = "") {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(`${key}-current`) || initialValue;
        console.log("Stored Value (current)..", storedValue);
        return storedValue;
    });

    useEffect(() => {
        const previousValue = localStorage.getItem(`${key}-current`);

        if (value !== null) {
            if (previousValue !== value) {
                localStorage.setItem(`${key}-previous`, previousValue || "");
            }
            localStorage.setItem(`${key}-current`, value);
            console.log("Updated Local Storage (current):", value);
            console.log("Updated Local Storage (previous):", previousValue);
        }
    }, [key, value]);

    return { value, setValue };
}

