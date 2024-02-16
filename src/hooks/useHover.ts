import { useState } from "react";

export function useHover():{
    hover: boolean;
    setHoverTrue: () => void;
    setHoverFalse: () => void;
    toggleHover: () => void;
}{
    const [hover, setHover] = useState(false);

    function setHoverTrue(){
        setHover(true);
    }

    function setHoverFalse(){
        setHover(false);
    }

    function toggleHover(){
        setHover(!hover);
    }

    return {
        hover,
        setHoverTrue,
        setHoverFalse,
        toggleHover,
    }
}