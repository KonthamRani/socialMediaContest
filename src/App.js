
import './App.css';
import Post from './components/Post'
import Search from './components/Search'

const App = () => {
  return (
    <div className="App">
      <Search />
      <br />
      <div className='Post'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default App;
