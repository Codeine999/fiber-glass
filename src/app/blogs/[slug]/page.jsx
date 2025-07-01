import { blogs } from '@/data';
import Client from './client';



export function generateStaticParams() {
  return blogs.map((item) => ({ slug: item.id }));
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const data = blogs.filter((item) => item.id === slug);
  if (!data) return <div>ไม่พบข้อมูลอัลบั้มนี้</div>;

  return <Client data={data} />;
}