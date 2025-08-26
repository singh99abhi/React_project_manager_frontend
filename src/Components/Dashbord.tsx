import React from 'react'
import Sidebar from './Sidebar'
import Table from './Table'

const Dashbord = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto ml-20">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-700">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Dashbord
