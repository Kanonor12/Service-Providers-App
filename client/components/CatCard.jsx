import React from 'react';
import Image from 'next/image';

const CatCard = ({item}) => (
 
    <div className='flex flex-col items-center cursor-pointer'>
        <Image src={item.img} alt="category" width={150} height={150} className="object-contain w-36 h-48"/>
        <span>{item.desc}</span>
    </div>
  
  
);

export default CatCard;
