import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Posts from './components/Posts';
import ReactPaginate from 'react-paginate';


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
 
  const pagesVisited = currentPage * postsPerPage;

  //console.log(pagesVisited);

  const displayPosts = posts.slice(pagesVisited, pagesVisited + postsPerPage)
   

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    console.log(selected);
    setCurrentPage(selected);
  };

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then( res => res.json() )
      .then( data => {
        setPosts(data)
        setLoading(false)
      })
  },[])

  //console.log(posts)
  return (
    <div className="container mt-5 App">
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={displayPosts} loading={loading}></Posts>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link previousBttn"}
        nextLinkClassName={"page-link nextBttn"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        disabledClassName={"disabled"}
        activeClassName={"active paginationActive"}
      />
    </div>
  );
}

export default App;
