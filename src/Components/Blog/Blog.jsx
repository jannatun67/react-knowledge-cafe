import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handelAddToBookmark,markAsRead}) => {
   
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags} = blog
    return (
        <div className='space-y-3'>
            <img className='w-full mt-16 rounded-md' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='text-gray-500'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handelAddToBookmark(blog)} className='ml-2 text-2xl'><FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p className='text-gray-500 font-semibold'>
                {
                   hashtags.map((hash, index)=> <span key={index}><a href="">{hash}</a></span>) 
                }
            </p>
            <button 
            onClick={()=>markAsRead(id, reading_time)}
            className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes= {
    blog:PropTypes.object.isRequired,
    handelAddToBookmark:PropTypes.func.isRequired,
    markAsRead:PropTypes.number,
    id:PropTypes.number
}
export default Blog;