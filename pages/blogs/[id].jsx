import {data} from '@/components/Data/Blogs_DataBase.jsx'
import Blogs_page from './../../components/Blogs_page/Blogs_page';

export function getStaticPaths() {
    const paths = data.map((element) => ({
        params: { id: element.ID },
    }))
    
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    // console.log(paths);
    return { paths, fallback: false }
}

// This also gets called at build time
export function getStaticProps({ params }) {
    console.log(params);
    // params contains the post `id`. 
    // If the route is like /posts/1, then params.id is 1
    let post;
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].ID === params.id) {
            post = data[i];
            break;
        }
    }
    
    // Pass post data to the page via props
    return { props: { post } }
}
export default function Post({ post }) {
    if(post)
        return <Blogs_page post = {post}/>
}
