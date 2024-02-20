import React from 'react';
import { AppHeader } from '../../components';
import { styles } from './HeadphonesPage.styles';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';

export function HeadphonesPage() {
  const {screenDimensions} = useScreenDimensions();

  return (
    <div className='headphones-page' style={styles(screenDimensions).headphonesPage}>
      <div className='page-header' style={styles(screenDimensions).pageHeader}>
        <AppHeader />
        <h1 className='page-title' style={styles(screenDimensions).pageTitle}>Headphones</h1>
      </div>
    </div>
  );
}
