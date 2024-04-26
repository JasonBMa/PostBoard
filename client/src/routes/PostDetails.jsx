import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../Components/Modal';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to="..">
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <div className="p-4 min-w-20 bg-gray-900 h-90 rounded-lg shadow-lg shadow-gray-950">
        <div class="flex flex-col w-full p-3">
          <h1 className="text-3xl">Title: <span class="text-2xl">{post.title}</span></h1>
          <h2 className="text-xl">Author: <span class="text-lg">{post.author}</span></h2>
          <div class="p-1 bg-slate-600 rounded">
            <h2 className="text-xl"><span class="text-lg">{post.body}</span></h2>
          </div>
          <h3 className="text-2xl">Post ID: <span class="text-xl">{post.id}</span></h3>
        </div>
      </div>
    </Modal>
  );
}

export default PostDetails;

export async function loader({params}) {
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post;
}