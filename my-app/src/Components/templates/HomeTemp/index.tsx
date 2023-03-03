import React, {FC} from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHeader from '../../organism/HomeHeader'



export default function HomeTemplate() {
  return (
    <div className='container'>
        <HomeHeader />
    </div>
  );
};
