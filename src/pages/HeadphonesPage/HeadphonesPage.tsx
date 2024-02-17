import React from 'react';
import { AppHeader } from '../../components';
import { styles } from './HeadphonesPage.styles';

export function HeadphonesPage() {
  return (
    <div className='headphones-page' style={styles.headphonesPage}>
      <div className='page-header' style={styles.pageHeader}>
        <AppHeader />
        <h1 className='page-title' style={styles.pageTitle}>Headphones</h1>
      </div>
    </div>
  );
}
