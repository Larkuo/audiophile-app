import { styles } from './SideNav.styles';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { CategoriesCardGroup } from '..';

interface SiveNavProps {
    closeSidenav: () => void;
}

export default function SideNav({closeSidenav}:SiveNavProps) {
    const { screenDimensions } = useScreenDimensions();

    return (
        <div className='side-nav' style={styles(screenDimensions).sideNav}>
            <CategoriesCardGroup
                isNav={true}
                closeNav={closeSidenav}
                groupStylesOverride={styles(screenDimensions).categoryGroup}
                cardStylesOverride={styles(screenDimensions).categoryCard}
            />
        </div>
    );
}
