import React from 'react';
import { styles } from './SocialLinkGroup.styles';
import { useHover } from '../../hooks/useHover';
import { colors } from '../../theme/Theme';

import facebook_svg from '../../assets/shared/desktop/icon-facebook.svg';
import twitter_svg from '../../assets/shared/desktop/icon-twitter.svg';
import instagram_svg from '../../assets/shared/desktop/icon-instagram.svg'; 
import { useScreenDimensions } from '../../hooks/useScreenDimensions';


type SocialIconType = 'facebook' | 'instagram' | 'twitter';

const SocialIcon = ({name}:{name: SocialIconType}) => {
  const {
    hover, 
    setHoverTrue, 
    setHoverFalse
  } = useHover();
  
  return(
    <a 
      href={`https://${name}.com` } 
      target="_blank" style={styles.socialLink}
      className={`${name} social link`}
    >
      <img 
        src={name === 'facebook'? facebook_svg : name === 'twitter'? twitter_svg : instagram_svg} 
        style={{
          ...styles.socialIcon, 
          filter: hover? colors.filterPrimary : 'none'
        }} 
        onMouseEnter={setHoverTrue}
        onMouseLeave={setHoverFalse}
        alt={`${name} social icon`}
      />
    </a>
  );
}

export function SocialLinkGroup() {
  const { screenDimensions } = useScreenDimensions();
  
    return (
      <div style={styles(screenDimensions).socialGroup}>
        <SocialIcon name='facebook' />
        <SocialIcon name='twitter' />
        <SocialIcon name='instagram' />
      </div>
    );
}
