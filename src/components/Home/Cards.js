import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import p1 from '../../images/p1.jpg'
import p2 from '../../images/p2.jpg'
import p3 from '../../images/p3.jpg'
import p4 from '../../images/p4.jpg'
import p5 from '../../images/p5.jpg'
function Cards() {
  return (
    <div className='cards'>
      <h1>Check out NEW Arrivals!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={p2}
              text='MGEX RX-0 Unicorn Gundam "Ver.Ka"'
              label='NEW'
              path='/services'
            />
            <CardItem
              src={p3}
              text='MG XXXG-00W0 Wing Gundam Zero EW "Ver.Ka"'
              label='OUT OF STOCK'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={p4}
              text='PG Unleashed RX-78-2 Gundam'
              label='NEW'
              path='/services'
            />
            <CardItem
              src={p1}
              text='HGUC XI Gundam VS Penelope Funnel Missile Effect Set 1/144'
              label='Pre-Order'
              path='/products'
            />
            <CardItem
              src={p5}
              text='RG MSN-02 Zeong'
              label='NEW'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
