import React from 'react';
import Sidebar from './Sidebar';

const AdminPanel = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-12 p-0 m-0'>
                    <Sidebar />
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminPanel