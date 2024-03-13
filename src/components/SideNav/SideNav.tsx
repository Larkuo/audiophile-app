import { styles } from './SideNav.styles';
import AppNavLink from '../AppNavLink/AppNavLink';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { APPNAV_DATA, AppNavDataProps } from '../../navigation/AppNavbarData';

interface SiveNavProps {
    closeSidenav: () => void;
}

export default function SideNav({closeSidenav}:SiveNavProps) {
    const { screenDimensions } = useScreenDimensions();

    return (
        <div className='side-nav' style={styles(screenDimensions).sideNav}>
            <div className='nav-list' style={styles(screenDimensions).navList}>
                <div className='side-nav-header' style={styles(screenDimensions).sidenavHeader}>
                    <a style={styles(screenDimensions).closeButton} onClick={closeSidenav}>(x)</a>
                </div>
                {APPNAV_DATA.map((nav: AppNavDataProps, index: number) => 
                    <AppNavLink 
                        key={index}
                        path={nav.path} 
                        name={nav.name}
                        onClick={closeSidenav}
                        stylesOverride={styles(screenDimensions).navLink} 
                    />
                )}
            </div>
        </div>
    );
}
