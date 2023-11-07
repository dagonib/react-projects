import { useRef } from 'react';

export function useScroll () {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef;

        if(direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300
        }
    }

    return { scrollRef, scroll }
}