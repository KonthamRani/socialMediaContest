import React,{useState} from 'react';
import './Post.css'

const Post = ({keys,title,image}) => {

    
    const [likes,setLikes]=useState(0);
    
    
    
      const handleLike = () => {
        setLikes(prev=> prev+1);
       
      };
  
    return (
        <div className="Card" key={keys}>
            <div className="image">
                <img src={image} alt="" height="100%" width="100%" />
            </div>
            <div className='body'>
                
              <span>UserId:{keys}</span>  
                <span>Title:{title}</span>
                <span>Likes:{likes}</span>
                <button onClick={handleLike}>Like Post</button>
            </div>
        </div>
    )
}

export default Post;