import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Table from './Table'


const Dashbord = () => {

  return (
    <div className='flex h-screen'>
        <Sidebar></Sidebar>
        <div className='flex-1 bg-gray-900'>
        <Table></Table>
        </div>
    </div>
  )
}

export default Dashbord