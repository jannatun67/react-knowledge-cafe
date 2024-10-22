
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {
 const [bookmarks, setBookmarks]= useState([]);
 const[readingTime, setReadingTime]= useState(0)

 const handelAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
 }

 const markAsRead = (id , time) =>{
 const newReadingTime =readingTime+ time;
 setReadingTime(newReadingTime)
//  remove the read blog form bookmark
// console.log("remove bookmark", id);
const remainingBookmark =bookmarks.filter(bookmark=> bookmark.id !==id);
setBookmarks(remainingBookmark)
 }

  return (
    <>
     <div className='max-w-7xl mx-auto'>
     <Header></Header>
     </div>
     <div className='md:flex p-4  max-w-7xl mx-auto'>
     <Blogs handelAddToBookmark={handelAddToBookmark} markAsRead={markAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    
     </div>
    </>
  )
}

export default App
