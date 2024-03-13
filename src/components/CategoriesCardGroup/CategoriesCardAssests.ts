import { ScreenDimensionsProps } from '../../hooks/useScreenDimensions';
import { SCREEN_LIMITS } from '../../theme/Theme';

import yx1_desktop from '../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import yx1_tablet from '../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg';
import yx1_mobile from '../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg';

import xx59_desktop from '../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';
import xx59_tablet from '../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg';
import xx59_mobile from '../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg';

import xx99_mark_one_desktop from '../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import xx99_mark_one_tablet from '../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg';
import xx99_mark_one_mobile from '../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg';

import xx99_mark_two_desktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import xx99_mark_two_tablet from '../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg';
import xx99_mark_two_mobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';

import zx7_desktop from '../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg';
import zx7_tablet from '../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg';
import zx7_mobile from '../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg';

import zx9_desktop from '../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import zx9_tablet from '../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg';
import zx9_mobile from '../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg';



export const cardAssets = (screenDimensions: ScreenDimensionsProps) => <any>({
    yx1_earphones: screenDimensions.width <= SCREEN_LIMITS.mobile
            ? yx1_mobile
            : screenDimensions.width <= SCREEN_LIMITS.tablet
            ? yx1_tablet  : yx1_desktop,
    xx59_headphones: screenDimensions.width <= SCREEN_LIMITS.mobile
            ? xx59_mobile
            : screenDimensions.width <= SCREEN_LIMITS.tablet
            ? xx59_tablet  : xx59_desktop,
    xx99_mark_one_headphones: screenDimensions.width <= SCREEN_LIMITS.mobile
            ? xx99_mark_one_mobile
            : screenDimensions.width <= SCREEN_LIMITS.tablet
            ? xx99_mark_one_tablet  : xx99_mark_one_desktop,
    xx99_mark_two_headphones: screenDimensions.width <= SCREEN_LIMITS.mobile
            ? xx99_mark_two_mobile
            : screenDimensions.width <= SCREEN_LIMITS.tablet
            ? xx99_mark_two_tablet  : xx99_mark_two_desktop,
    zx7_speaker: screenDimensions.width <= SCREEN_LIMITS.mobile
            ? zx7_mobile
            : screenDimensions.width <= SCREEN_LIMITS.tablet
            ? zx7_tablet  : zx7_desktop,
    zx9_speaker: screenDimensions.width <= SCREEN_LIMITS.mobile
            ? zx9_mobile
            : screenDimensions.width <= SCREEN_LIMITS.tablet
            ? zx9_tablet  : zx9_desktop,
});