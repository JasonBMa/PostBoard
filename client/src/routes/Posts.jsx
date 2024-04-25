import { Outlet } from 'react-router-dom';
import PostsList from "../Components/PostsList"

function Posts() {
  return (
    <>
      <Outlet/>
      <div className="w-full h-1/2 py-3 px-10">
        <PostsList/>
        <button className="button a">Random mf button</button>
      </div>
    </>
  )
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}