import prismadb from "@/lib/prismadb"
import Image from 'next/image'

export default async function Home() {

  const posts = await prismadb.post.findMany({})

  return (
    <div className="container mx-auto p-8 flex flex-col gap-8">
      {
        posts.map((post) => (
          <div key={post.id} className="flex items-center gap-4 border border-gray-500/50 rounded-xl p-4">
            {post.imageUrl && (<Image src={post.imageUrl} width={200} height={200} alt={post.title} className="rounded-xl" />)}
            <div>
              <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
              <p>{post.post}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export const dynamic = "force-dynamic"
