import { useState, useEffect, useRef } from "react";


export default function useInOnScreen() {
    const [isOnScreen, setIsOnScreen] = useState({});
    const elementRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const index = entry.target.getAttribute('data-index');
                setIsOnScreen(prev => ({
                    ...prev,
                    [index]: entry.isIntersecting
                }));
            });
        });

        elementRefs.current.forEach(ref => observer.observe(ref));
        return () => {
            observer.disconnect();
        };
    }, []);

    return [isOnScreen, elementRefs];
}
