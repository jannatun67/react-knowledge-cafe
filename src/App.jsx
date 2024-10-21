
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blog from './Components/Blog/Blog'

function App() {
 

  return (
    <>
      <Header></Header>
     <main className='md:flex p-4 mx-4'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     <Blog></Blog>
     </main>
    </>
  )
}

export default App
