import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

function PostsList() {
  var posts = useLoaderData();
  return (
    <div className="p-3">
      <ul className="w-full pt-9 flex justify-center flex-wrap gap-3">
        {posts.length > 0 && posts.map((post) => {
          return(
            <Post key={post.id} id={post.id} title={post.title} body={post.body} author={post.author}/>
          )
        })}
        {posts.length === 0 && <div className="text-center"><p className="text-2xl">There are no posts yet</p><p className="text-xl">Start adding some!</p></div>}
      </ul>
    </div>
  )
}

export default PostsList;