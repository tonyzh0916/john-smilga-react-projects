import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar}=useGlobalContext();

  return (
    <aside className={`${isSidebarOpen? 'siidebar-wrapper show':'sidebar-wrapper'}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes/>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
