import { useNavigate } from 'react-router-dom'
import React from 'react'
const Modal = ({children}) => {
  const navigate = useNavigate();
  function onClose(){
    navigate('/');
  }
  return (
    <>
      {/*Makes it so that clicking out side of the modal/dialog will cause the UI to close, while applying styling to make the background dark*/}
      <div onClick={onClose} className="z-10 fixed inset-0 p-3 bg-opacity-25 bg-black backdrop-blur-sm">
        {/* e.stopPropagation() makes it so dialog children don't trigger the onclick from the parent*/}
        <dialog onClick={(e) => {e.stopPropagation()}} open className="z-20 w-96">
          {children}
        </dialog>
      </div>

    </>
  )
}

export default Modal