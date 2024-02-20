import { useEffect, useState } from "react";

export interface ScreenDimensionsProps{
    width: number;
    height: number;
}

export function useScreenDimensions():{
    screenDimensions: ScreenDimensionsProps;
}{
    const [screenDimensions, setScreenDimensions] = useState<ScreenDimensionsProps>({
        width: window.screen.width,
        height: window.screen.height
    });

    function handleResize() {
        const width = window.screen.width;
        const height = window.screen.height;

        setScreenDimensions({width, height});
        // console.log('Dimensions Changed: ',{width, height});
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        return () => 
            window.removeEventListener('resize', handleResize);
    }, []);

    return {
        screenDimensions
    }
}