import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="w-1/3  ml-3 p-4 bg-gray-200 rounded-md">
            <div className='border border-purple-600 py-3 rounded-xl bg-purple-100 mb-5'>
                <h3 className='text-xl text-purple-600 text-center'>Spent time on read:{readingTime}min</h3>
            </div>
            <div className=''>
            <h2 className="text-3xl text-center ">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, index) => <Bookmark key={index} 
                    bookmark={bookmark}
                    ></Bookmark>)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;