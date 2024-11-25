
'use client'
import Absolute from '@/components/ourBusiness/Absolute';
import Comprehensive from '@/components/ourBusiness/Comprehensive';
import HalfBanner from '@/components/ourBusiness/HalfBanner';
import HighQualityProduct from '@/components/ourBusiness/HighQualityProduct';
import Service from '@/components/ourBusiness/Service';
import Text from '@/components/ourBusiness/Text';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import Humanitarian from '@/components/ourBusiness/Humanitarian';
import Communi from '@/components/ourBusiness/Communi';

const page = () => {
    return (
        <div>
           <Navbar/>
           <HalfBanner/>
           <Text/>
           <HighQualityProduct/>
           <Comprehensive/>
           <Service/>
           <Absolute/>
           <Communi/>
           <Humanitarian/> 
        </div>
    );
};

export default page;