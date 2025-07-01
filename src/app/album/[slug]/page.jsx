import { album } from '@/data/index'
import Client from './client';



export function generateStaticParams() {
  return album.map((item) => ({ slug: item.id }));
}

export default async function AlbumPage({ params }) {
    const { slug } = params;
  const data = album.find((item) => item.id === slug);
  if (!data) return <div>ไม่พบข้อมูลอัลบั้มนี้</div>;

  return <Client data={data} />;
}