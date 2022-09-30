import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import promo1 from 'assets/images/promo/promo-1.png';
import promo2 from 'assets/images/promo/promo-2.png';
import promo3 from 'assets/images/promo/promo-3.png';
import { Carousel } from 'modules/shared/components/container/Carousel';
import { PromoCard } from '../components/PromoCard';
import { Button } from 'modules/shared/components/form/Button';
import { Theme } from 'constants/Color';
import { StickyFooter } from 'modules/shared/components/container/StickyFooter';

export const Promo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Carousel items={CAROUSEL_ITEM} />
      <StickyFooter>
        <Button onPress={() => {}} label='Sign up' theme={Theme.primary} />
        <Button onPress={() => {}} label='Login' theme={Theme.default} />
      </StickyFooter>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  }
});

const CAROUSEL_ITEM = [{
  id: 'promo-1',
  view: <PromoCard illustrationSrc={promo1} title='Gain total control of your money' description='Become your own money manager and make every cent count' />
},{
  id: 'promo-2',
  view: <PromoCard illustrationSrc={promo2} title='Know where your 
  money goes' description='Track your transaction easily,
  with categories and financial report ' />
},{
  id: 'promo-3',
  view: <PromoCard illustrationSrc={promo3} title='Planning ahead' description='Setup your budget for each category
  so you in control' />
}]