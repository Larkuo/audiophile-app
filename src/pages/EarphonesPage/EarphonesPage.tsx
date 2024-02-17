import React from 'react';
import { styles } from './EarphonesPage.styles';
import { AppHeader } from '../../components';

export function EarphonesPage() {
  return (
    <div className='headphones-page' style={styles.earphonesPage}>
      <div className='page-header' style={styles.pageHeader}>
        <AppHeader />
        <h1 className='page-title' style={styles.pageTitle}>Earphones</h1>
      </div>
    </div>
  );
}
