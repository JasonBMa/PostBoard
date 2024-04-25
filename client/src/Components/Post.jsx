import { Link } from 'react-router-dom';

function Post(props){
  return (
    <li>
      <Link to={props.id}>
        <div className="max-w-sm p-3 border rounded-lg shadow-lg shadow-gray-800 hover:animate-pulse">
          <p className="text-3xl font-medium">{props.title}</p>
          <p className="font-weight">{props.body}</p>
          <p className="text-green-300">Created by: {props.author}</p>
        </div>
      </Link>
    </li>
  )
}

export default Post