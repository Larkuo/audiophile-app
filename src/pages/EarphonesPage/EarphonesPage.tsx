import React from 'react';
import { styles } from './EarphonesPage.styles';
import { AppHeader } from '../../components';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';


export function EarphonesPage() {
  const {screenDimensions} = useScreenDimensions();

  return (
    <div className='headphones-page' style={styles(screenDimensions).earphonesPage}>
      <div className='page-header' style={styles(screenDimensions).pageHeader}>
        <AppHeader />
        <h1 className='page-title' style={styles(screenDimensions).pageTitle}>Earphones</h1>
      </div>
    </div>
  );
}
