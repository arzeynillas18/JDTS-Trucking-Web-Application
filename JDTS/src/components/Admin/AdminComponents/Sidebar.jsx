import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

function UpdatedSidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={`sidebar ${openSidebarToggle ? 'sidebar-responsive' : ''}`}>
      <div className='sidebar-title'>
        <div className='sidebar-brand flex items-center'>
          <BsCart3 className='icon_header' /> <span className="ml-2">SHOP</span>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/" className="flex items-center">
            <BsGrid1X2Fill className='icon' /> <span className="ml-2">Dashboard</span>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/" className="flex items-center">
            <BsFillArchiveFill className='icon' /> <span className="ml-2">Products</span>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/" className="flex items-center">
            <BsFillGrid3X3GapFill className='icon' /> <span className="ml-2">Categories</span>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/" className="flex items-center">
            <BsPeopleFill className='icon' /> <span className="ml-2">Customers</span>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/" className="flex items-center">
            <BsListCheck className='icon' /> <span className="ml-2">Inventory</span>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/" className="flex items-center">
            <BsMenuButtonWideFill className='icon' /> <span className="ml-2">Reports</span>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/" className="flex items-center">
            <BsFillGearFill className='icon' /> <span className="ml-2">Setting</span>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default UpdatedSidebar;
