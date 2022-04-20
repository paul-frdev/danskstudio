import React from 'react';

import reviewOne from '../images/mainSlider/reviewone.jpg';
import reviewTwo from '../images/mainSlider/reviewtwo.jpg';
import reviewThree from '../images/mainSlider/reviewthree.jpg';
import reviewFour from '../images/mainSlider/reviewfour.jpg';
import UISlider from './UISlider';
import { MainTitle } from './MainTitle';


export const Reviews = () => {
  return (
    <section className='reviews'>
      <MainTitle className='reviews__title' title='before' position='right'>
        <span>Отзывы о dansk studio</span>
      </MainTitle>
      <div className="reviews__container">
        <UISlider

        >
          <div>
            <img src={reviewOne} alt="reviewOne" />
          </div>
          <div>
            <img src={reviewTwo} alt="reviewTwo" />
          </div>
          <div>
            <img src={reviewThree} alt="reviewThree" />
          </div>
          <div>
            <img src={reviewFour} alt="reviewFour" />
          </div>
          <div>
            <img src={reviewOne} alt="reviewOne" />
          </div>
          <div>
            <img src={reviewTwo} alt="reviewTwo" />
          </div>
          <div>
            <img src={reviewFour} alt="reviewFour" />
          </div>
        </UISlider>
      </div>
    </section>
  )
}
