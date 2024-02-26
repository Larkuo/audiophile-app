import React from 'react';
import { styles } from './AppFooter.styles';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';

import AppLogo from '../../assets/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';
import AppNavLink from '../AppNavLink/AppNavLink';
import { SocialLinkGroup } from '..';


export function AppFooter() {
    const { screenDimensions } = useScreenDimensions();

    return(
        <div className='app-footer' style={styles(screenDimensions).appFooter}>
            <div className='footer-dash' style={styles(screenDimensions).footerDash}>.</div>
            <div className='logo-nav-row' style={styles(screenDimensions).logoNavRow}>
                <Link to={'/'} className="logo-link" style={styles(screenDimensions).logoLink}>
                    <img src={AppLogo} alt={'audiophile logo'} style={styles(screenDimensions).appLogo}/>
                </Link>
                <div style={styles(screenDimensions).navBar} className='nav-bar'>
                    <AppNavLink 
                        path={'/'} 
                        name='home' 
                        stylesOverride={styles(screenDimensions).navLink}
                    />
                    <AppNavLink 
                        path={'/headphones'} 
                        name='headphones'
                        stylesOverride={styles(screenDimensions).navLink}
                    />
                    <AppNavLink 
                        path={'/speakers'} 
                        name='speakers'
                        stylesOverride={styles(screenDimensions).navLink}
                    />
                    <AppNavLink 
                        path={'/earphones'} 
                        name='earphones'
                    />
                </div>
            </div>
            <div className='footer-body-row' style={styles(screenDimensions).footerBodyRow}>
                <span className='footer-body-text' style={styles(screenDimensions).footerBodyText}>
                    Audiophile is an all in one stop to fulfill your audio needs. 
                    We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
                    Come and visit our demo facility - we’re open 7 days a week.
                </span>
            </div>
            <div style={styles(screenDimensions).copyrightSocialGroup}>
                <div>
                    <span className='coppyright-text' style={styles(screenDimensions).footerBodyText}>
                        Copyright 2021. All Rights Reserved
                    </span>
                </div>
                <SocialLinkGroup />
            </div>
        </div>
    );
}
