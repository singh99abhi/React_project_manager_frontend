import React, { useState } from 'react'
import { Data } from '../utils/data'
import { BiSort } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { MdSort } from 'react-icons/md'

const Table = () => {
  const [projects, setProjects] = useState(Data)
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [sortConfig, setSortConfig] = useState(null)
  const [filterVisible, setFiltersVisible] = useState(false)

  const [filters, setFilters] = useState({
    name: "",
    country: "",
    email: "",
    project: "",
    status: ""
  })

  const sortProjects = (key) => {
    let sortedProjects = [...projects]
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1))
      setSortConfig({ key, direction: "descending" })
    } else {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1))
      setSortConfig({ key, direction: "ascending" })
    }
    setProjects(sortedProjects)
  }

  const handleSortOptionClick = (key) => {
    sortProjects(key)
    setDropdownVisible(false)
  }

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  const filteredProjects = projects.filter((project) => (
    (filters.name === "" || project.client.toLowerCase().includes(filters.name.toLowerCase())) &&
    (filters.country === "" || project.country.toLowerCase().includes(filters.country.toLowerCase())) &&
    (filters.email === "" || project.email.toLowerCase().includes(filters.email.toLowerCase())) &&
    (filters.project === "" || project.project.toLowerCase().includes(filters.project.toLowerCase())) &&
    (filters.status === "" || project.status.toLowerCase().includes(filters.status.toLowerCase()))
  ))

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProject = filteredProjects.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='p-6 w-[93%] ml-[5rem]'>
      
      {/* Top Bar: Sort & Filters */}
      <div className='flex items-center mb-6 space-x-4'>
        
        {/* Sort */}
        <div className="relative">
          <button 
            onClick={() => setDropdownVisible(!dropdownVisible)} 
            className='border border-gray-700 flex items-center justify-center text-white px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 transition'>
            <BiSort className='mr-2' /> Sort <AiOutlineDown className='ml-2' />
          </button>
          {dropdownVisible && (
            <div className='absolute top-full left-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg'>
              <button onClick={() => handleSortOptionClick("client")} className='block px-4 py-2 text-gray-300 w-full hover:bg-gray-700'>Name</button>
              <button onClick={() => handleSortOptionClick("country")} className='block px-4 py-2 text-gray-300 w-full hover:bg-gray-700'>Country</button>
              <button onClick={() => handleSortOptionClick("date")} className='block px-4 py-2 text-gray-300 w-full hover:bg-gray-700'>Date</button>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="relative w-64">
          <button 
            onClick={() => setFiltersVisible(!filterVisible)} 
            className='border border-gray-700 flex items-center justify-center text-white px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 transition'>
            <MdSort className='mr-2' /> Filters <AiOutlineDown className='ml-2' />
          </button>
          {filterVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-900 border border-gray-700 rounded shadow-lg p-4 w-72">
              {["name", "country", "email", "project", "status"].map((field) => (
                <div className='mb-3' key={field}>
                  <label className='block text-gray-400 capitalize mb-1'>Filter By {field}:</label>
                  <input 
                    type="text" 
                    name={field} 
                    onChange={handleFilterChange} 
                    value={filters[field]} 
                    className='bg-gray-800 text-white rounded p-2 w-full border border-gray-700 focus:ring-2 focus:ring-blue-500'
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto rounded-lg border border-gray-700 text-white overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              {["Image", "Name", "Country", "Email", "Project", "Task Progress", "Status", "Date", "Action"].map((header) => (
                <th key={header} className="px-5 py-3 text-left text-gray-300 uppercase text-sm tracking-wider">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentProject.map((project, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                <td className="px-4 py-3">
                  <img src={project.image} alt={project.client} className='w-12 h-12 object-cover rounded-full border border-gray-600'/>
                </td>
                <td className="px-4 py-3">{project.client}</td>
                <td className="px-4 py-3">{project.country}</td>
                <td className="px-4 py-3">{project.email}</td>
                <td className="px-4 py-3">{project.project}</td>
                <td className='px-4 py-3'>
                  <div className="w-28 h-2 bg-gray-700 rounded">
                    <div className="h-2 bg-green-500 rounded" style={{ width: "70%" }}></div>
                  </div>
                </td>
                <td className='px-4 py-3'>
                  <span className={`px-2 py-1 rounded text-sm ${
                    project.status === "Completed" ? "bg-green-600/30 text-green-400" :
                    project.status === "In Progress" ? "bg-yellow-600/30 text-yellow-400" :
                    "bg-red-600/30 text-red-400"
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className='px-4 py-3'>{project.date}</td>
                <td className='px-4 py-3 text-gray-400 hover:text-white cursor-pointer'>
                  <BsThreeDots />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-6 space-x-4">
        <button 
          disabled={currentPage === 1} 
          onClick={() => handlePageChange(currentPage - 1)} 
          className='px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 disabled:opacity-50 transition'>
          Previous
        </button>
        <span className='px-4 py-2 text-gray-400'>Page {currentPage} of {totalPages}</span>
        <button 
          disabled={currentPage === totalPages} 
          onClick={() => handlePageChange(currentPage + 1)} 
          className='px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 disabled:opacity-50 transition'>
          Next
        </button>
      </div>
    </div>
  )
}

export default Table
