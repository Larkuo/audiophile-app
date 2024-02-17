import React from 'react';
import { AppHeader } from '../../components';
import { styles } from './SpeakersPage.styles';

export function SpeakersPage() {
  return (
    <div className='headphones-page' style={styles.speakersPage}>
      <div className='page-header' style={styles.pageHeader}>
        <AppHeader />
        <h1 className='page-title' style={styles.pageTitle}>Speakers</h1>
      </div>
    </div>
  );
}
