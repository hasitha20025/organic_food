import Image from 'next/image';
import barnd_logo from '../../../public/images/logos/logo.png';

export default function Logo() {
  return (
    <Image
      className="cursor-pointer"
      src={barnd_logo}
      width={50}
      height={50}
      alt="Brand logo"
    />
  );
}
