
import './App.css';
import Post from './components/Post'
import Search from './components/Search'
import {useState,useEffect} from 'react';

const App = () => {
  const [page,setPage]=useState(1);
  const [posts,setPosts]=useState([]);
  const [likes,setLikes]=useState(0)
  const [searchedText,setSearchText]=useState("")
  useEffect(()=>{
    // const fetchPosts=async ()=>{
    //   const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
    //   setPosts(...posts,...response.data)
    //   console.log(response)
    // }
    // fetchPosts();
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`)
    .then(response => response.json())
    .then(data => setPosts([...posts, ...data]))
    .catch(error => console.log(error));

  },[page])
  const handleButton=()=>{
    setPage(page+1);
  }
  const handleLike = () => {
    setLikes(likes + 1);
  };
  console.log(posts)
  const filteredPosts = posts.filter(post => post.title.includes(searchedText));
  return (

    <div className="App">
      <Search setSearchText={setSearchText}/>
      <br />
      <div className='Post'>
      {posts.map(post => {
         <Post
         key={post.id}
         username={post.userId}
         image={` https://picsum.photos/200?random=${post.id}`}
         title={post.title}
         onLike={handleLike}
         likesUi={likes}
       />

})}
      
      
      </div>
      <button className='load' onClick={handleButton}>Load More Posts</button>
    </div>
  );
}

export default App;
