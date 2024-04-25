import {Link} from 'react-router-dom';
import {MdPostAdd, MdMessage} from 'react-icons/md'

function Header(){
  return (
    <div className="w-full flex justify-between">
      <h1 className="flex text-6xl items-center"> <MdMessage size={50}/> Post Board</h1>
      <Link className="button flex items-center" to="/create-post">
        <MdPostAdd size={18}/>New Post
      </Link>
    </div>
  )
}

export default Header