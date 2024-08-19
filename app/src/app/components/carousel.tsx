import React from 'react';
import { Carousel } from 'antd';
import side_1 from '../../../public/images/slides/slide_1.png';
import side_2 from '../../../public/images/slides/slide_2.png';
import side_3 from '../../../public/images/slides/slide_3.png';
import side_4 from '../../../public/images/slides/slide_4.png';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  height: '250px',
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
};

const Carousels: React.FC = () => (
  <Carousel autoplay>
    <div>
      <Image className="" src={side_1} alt="sider_1" />
    </div>
    <div>
      <Image className="" src={side_2} alt="sider_1" />
    </div>
    <div>
      <Image className="" src={side_3} alt="sider_1" />
    </div>
    <div>
      <Image className="" src={side_4} alt="sider_1" />
    </div>
  </Carousel>
);

export default Carousels;
