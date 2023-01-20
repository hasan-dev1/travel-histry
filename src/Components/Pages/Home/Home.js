import React from 'react';
import Blogs from '../Blogs/Blogs';
import '../../../App.css'
import MostPopulartour from '../MostPopulartour/MostPopulartour';
import Vacation from '../Vacation/Vacation';
import Category from './Category';
import HomeBanner from './HomeBanner';
import ClientReview from '../ClientReview/ClientReview';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
      <div>
        <HomeBanner></HomeBanner>
        <Category></Category>
        <Vacation></Vacation>
        <MostPopulartour></MostPopulartour>
        <Blogs></Blogs>
        <ClientReview></ClientReview>
        <Subscribe></Subscribe>
        
      </div>
    );
};

export default Home;