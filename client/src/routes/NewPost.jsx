import React from 'react';
import { Form, redirect, useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';


const NewPost = () => {
  return (
    <Modal>
      <div className="p-8 bg-gray-900 h-90 rounded-lg shadow-lg shadow-gray-950">
        <Form method='post' className="flex flex-col space-y-1">
          <label htmlFor="title" className="text-2xl">Title</label>
          <input name="title" type="text" id="title" required rows={1} className="rounded-lg w-100% p-1"></input>
          <label htmlFor="body" className="text-xl"> Text </label>
          <textarea name="body" id="body" required rows={4} className="rounded-lg w-100% p-1"></textarea>
          <label htmlFor="author" className="text-xl">Name</label>
          <input name="author" type="text" id="author" className="rounded-lg w-100% p-1" required></input>
          <button type="submit" className="bg-gray-700 h-12 w-1/4">Submit</button>
        </Form>
      </div>
    </Modal>
  );
}

export default NewPost

export async function action({request}){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {title: '...', body: '...', author: '...'}
  console.log(postData);
  fetch("http://localhost:8080/posts",{
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': "application/json"
    },
  });
  window.location.reload();
  return redirect('/');
}