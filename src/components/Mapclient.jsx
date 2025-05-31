'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
});

export default function MapClientWrapper() {
  return (
    <div className='px-10 pb-14'>
      <Map />
    </div>
  );
}