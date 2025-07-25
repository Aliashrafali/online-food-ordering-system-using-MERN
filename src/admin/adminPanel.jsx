import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';

const AdminPanel = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-12 p-0 m-0'>
                    <Sidebar />
                </div>
                <div className='col-lg-10 col-md-10 col-sm-12 p-0 m-0'>
                    <div className='top-header'>

                    </div>
                    <Body />
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminPanel