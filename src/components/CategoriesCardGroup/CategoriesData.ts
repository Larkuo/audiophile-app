import HeadphoneThumnail from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerThumbnail from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphoneThumbnail from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

export interface CategoriesCardProps{
    key: number;
    label: string;
    image: string;
}

export const CATEGORIES_CARD_DATA = [
    {
        key: 1, 
        label: 'headphones', 
        image: HeadphoneThumnail
    },
    {
        key: 2, 
        label: 'speakers', 
        image: SpeakerThumbnail
    },
    {
        key: 3, 
        label: 'earphones', 
        image: EarphoneThumbnail
    },
]