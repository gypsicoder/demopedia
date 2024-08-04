import Image from 'next/image';
import UrlButton from '@/components/urlButton/UrlButton';

export default function Home() {
  return (
    <div className='flex items-center gap-[100px]'>
      <div className='flex-1 flex flex-col gap-[50px]'>
        <h1 className='text-7xl title-background-gradient'>
          Better design for your digital products.
        </h1>
        <p className='text-2xl font-medium'>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <UrlButton text='See Our Works' url='/portfolio' />
      </div>
      <div className='flex-1 flex flex-col gap-[50px]'>
        <Image width={1000} height={1000} src={'/hero.png'} alt='Hero' className='w-full h-[500px] object-contain hero-image-animation' />
      </div>
    </div>
  );
}
