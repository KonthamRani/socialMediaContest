import React from 'react';
import './Post.css'

const Post = () => {
    return (
        <div className="Card">
            <div className="image">
                <img src="https://images.pexels.com/photos/86397/leaf-individually-linde-lipovina-86397.jpeg?cs=srgb&dl=pexels-pixabay-86397.jpg&fm=jpg" height="100%" width="100%" />
            </div>
            <div className='body'>
              <span>UserId:1</span>  
                <span>Id:Lorem ipsum Lorem</span>
                <span>Likes:1</span>
                <button>Like Post</button>
            </div>
        </div>
    )
}

export default Post;