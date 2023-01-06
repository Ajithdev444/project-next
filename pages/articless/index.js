import Link from "next/link";

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = await response.json();

    return{
        props:{
            posts: data,
        }
    }
}

function Articles ({ posts}) {
    return(
        <div>
            <h1>List of Posts</h1>
            {
                posts.map((post) => {
                    return(
                        <>
                        <Link href={`articless/${post.id}`} key={post.id} style={{textDecoration:'none', color:'black'}}>
                            <h1>{post.id} | {post.title}</h1>
                            <h2>{post.body}</h2>
                        </Link>
                        </>
                    )
                })
            }
        </div>
    )
}
export default Articles