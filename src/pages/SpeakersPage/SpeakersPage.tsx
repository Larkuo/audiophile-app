import React from 'react';
import { AppFooter, AppHeader } from '../../components';
import { styles } from './SpeakersPage.styles';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';

export function SpeakersPage() {
    const {screenDimensions} = useScreenDimensions();

    return (
      <div className='headphones-page' style={styles(screenDimensions).speakersPage}>
        <div className='page-header' style={styles(screenDimensions).pageHeader}>
          <AppHeader />
          <h1 className='page-title' style={styles(screenDimensions).pageTitle}>Speakers</h1>
        </div>
        <AppFooter />
      </div>
    );
}
