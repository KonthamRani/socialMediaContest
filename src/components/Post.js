import React,{useEffect,useState} from 'react';
import './Post.css'

const Post = ({key,title,likesUi,username,image}) => {

    // const { id,username,image,title,onLike,like } = props;
    // console.log(props)
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [likes,setLikes]=useState(like);
    const handleLoadMore = () => {
        setCurrentPage(currentPage + 1);
      };
    // useEffect(() => {
    //     console.log(props)
    //     fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=20`)
    //       .then(response => response.json())
    //       .then(data => setPosts([...posts, ...data]))
    //       .catch(error => console.log(error));
    //   }, [currentPage]);
    
    //   const handleLike = (postId) => {
    //     setLikes(likes + 1);
    //     const updatedPosts = posts.map(post => {
    //       if (post.id === postId) {
    //         return { ...post, liked: true };
    //       } else {
    //         return post;
    //       }
    //     });
    //     setPosts(updatedPosts);
    //   };
  
    return (
        <div className="Card">
            post is rendered
            <div className="image">
                <img src={image} alt={username} height="100%" width="100%" />
            </div>
            <div className='body'>
                
              <span>UserId:{key}</span>  
                <span>Title:{title}</span>
                <span>Likes:{likesUi}</span>
                <button >Like Post</button>
            </div>
        </div>
    )
}

export default Post;