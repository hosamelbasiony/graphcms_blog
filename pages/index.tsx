import type { NextPage, GetStaticProps } from 'next'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'

const Home =({ posts }: { posts:any[] }) => {
  
  console.log(posts);

  return (
    <div className="container mx-auto px-4 lg:px-10 mb-8">
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget slug={null} categories={[]} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
 
  return {
    props: { posts },
  };
}

export default Home
