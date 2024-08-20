import { Card } from 'antd';
import Image, { StaticImageData } from 'next/image';
export default function ProductCard(props:{imageLink:StaticImageData;}) {
  return (
    <>
        <Card
        hoverable
        style={{ width: 240 }}
        cover={
            <Image
            className="cursor-pointer"
            src={props.imageLink}
            width={150}
            height={150}
            alt="product_01"
          />
        }
         >
        
        </Card>
    </>
  )
}
