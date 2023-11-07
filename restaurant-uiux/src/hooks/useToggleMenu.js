import { useState } from "react";


export function useToggleMenu () {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return { toggleMenu, handleToggleMenu }
}