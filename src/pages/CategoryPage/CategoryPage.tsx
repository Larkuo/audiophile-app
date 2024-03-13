import { styles } from './CategoryPage.styles';
import { AppFooter, AppHeader, AudioGearSection, CategoriesCardGroup, CategoryItemCard } from '../../components';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { useParams } from 'react-router-dom';
import { CategoryItemProps, useCategoryDetails } from '../../hooks/useCategoryDetails';


export function CategoryPage() {
    const { pageCategory } = useParams();

    const {screenDimensions} = useScreenDimensions();
    const {
        categoryItems
    } = useCategoryDetails(pageCategory || 'headphones');

    return (
        <div className='category-page' style={styles(screenDimensions).categoryPage}>
        <div className='category-page-header' style={styles(screenDimensions).pageHeader}>
            <AppHeader />
            <h1 className='category-page-title' style={styles(screenDimensions).pageTitle}>{pageCategory}</h1>
        </div>
        {categoryItems.map((item: CategoryItemProps, index: number) => 
            <CategoryItemCard
                key={index}
                id={item.id}
                name={item.name}
                slug={item.slug}
                description={item.description}
                isNew={item.new}
                image={item.image}
                imageLeft={index%2 === 0}
            />
        )}
        <CategoriesCardGroup />
        <AudioGearSection />
        <AppFooter />
        </div>
    );
}
