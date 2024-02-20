import React from 'react';
import { useHover } from '../../hooks/useHover';
import { styles } from './AppButton.styles';
import { colors } from '../../theme/Theme';
import rightArrowIcon from '../../assets/shared/desktop/icon-arrow-right.svg';

type AppButtonModeType = 'primary' | 'secondary' | 'arrow' | 'black-fill';

interface AppButtonProps {
    label: string;
    onClick?: () => void;
    mode: AppButtonModeType;
    stylesOverride?: object;
    hoverStylesOverride?: object;
}

export function AppButton({
    label,
    onClick,
    mode,
    stylesOverride,
    hoverStylesOverride,
}:AppButtonProps) {
    const {
        hover, 
        setHoverTrue, 
        setHoverFalse
    } = useHover();

    const buttonStyle = hover?{
        ...styles.button,
        ...stylesOverride,
        ...hoverStylesOverride,
        backgroundColor: mode === 'primary' ? colors.hoverPrimary 
                            : mode === 'secondary'? colors.black
                            : mode === 'black-fill'? colors.hoverBlack
                            : colors.transparent,
        border: mode === 'secondary'
                            ? `1px solid ${colors.black}` : 'none',
        color: mode === 'arrow'? colors.primary : colors.white,
    }:{
        ...styles.button,
        ...stylesOverride,
        backgroundColor: mode === 'primary' ? colors.primary 
                            : mode === 'secondary'? colors.white
                            : mode === 'black-fill'? colors.black
                            : colors.transparent,
        color: mode === 'primary' || mode === 'black-fill'? colors.white
                : mode === 'secondary'? colors.black : colors.borderGray,
        border: mode === 'secondary'
                ? `1px solid ${colors.black}` : 'none', 
    }

    return (
        <button
            className={`${label} button`}
            style={buttonStyle}
            onClick={onClick}
            onMouseEnter={setHoverTrue}
            onMouseLeave={setHoverFalse}
        >
            {label}
            {mode === 'arrow' && 
                <img src={rightArrowIcon} style={styles.rightIcon}/>
            }
        </button>
    );
}
