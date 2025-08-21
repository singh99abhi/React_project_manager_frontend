import React, { useState } from 'react'
import { Data } from '../utils/data'
import { BiSort } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { MdSort } from 'react-icons/md'

const Table = () => {
    const [projects,setProjects]=useState(Data)
    const [dropdownVisible,setDropdownVisible]=useState(false)
    const [sortConfig,setSortConfig]=useState<{key:string;direction:string}|null>(null)
    const [filterVisible,setFiltersVisible]=useState(false)
    


    const [filters,setFilters]=useState({
        name:"",
        country:"",
        email:"",
        project:"",
        status:""
    })
    
    const sortProjects=(key:string)=>{
      let sortedProjects=  [...projects]
      if(sortConfig && sortConfig.key===key && sortConfig.direction==="ascending"){
        sortedProjects.sort((a,b)=> (a[key]>b[key]?-1:1))
        setSortConfig({key,direction:"descending"})
      }else{
        sortedProjects.sort((a,b)=> (a[key]>b[key]?1:-1))
        setSortConfig({key,direction:"ascending"})
      }
      setProjects(sortedProjects)
    }


    const handleSortOptionClick=(key:string)=>{
        sortProjects(key)
        setDropdownVisible(false)
    }

    const handleFilterChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFilters({
            ...filters,
            [e.target.name]:e.target.value
        })

    }

   const filteredProjects = projects.filter((project) => (
  
  (filters.name === "" || project.client.toLowerCase().includes(filters.name.toLowerCase())) &&
  (filters.country === "" || project.country.toLowerCase().includes(filters.country.toLowerCase())) &&
  (filters.email === "" || project.email.toLowerCase().includes(filters.email.toLowerCase())) &&
  (filters.project === "" || project.project.toLowerCase().includes(filters.project.toLowerCase())) &&
  (filters.status === "" || project.status.toLowerCase().includes(filters.status.toLowerCase()))
));

 const [currentPage,setCurrentPage]=useState(1)
 const itemsPerPage=5
 const startIndex=(currentPage-1)*itemsPerPage
 const currentProject=filteredProjects.slice(startIndex,startIndex+itemsPerPage)
 const totalPages=Math.ceil(filteredProjects.length/itemsPerPage)

 const handlePageChange=(pageNumber:number)=>{
    setCurrentPage(pageNumber)

 }



  return (
    <div className='p-4 w-[93%] ml-[5rem]'>
        <div className='flex items-center mb-5'>
            <div className="relative">
            <button onClick={()=>setDropdownVisible(!dropdownVisible)} className='border border-gray-700 flex items-center justify-center text-white p-2 rounded'>
                <BiSort className='mr-[0.3rem]'></BiSort> Sort <AiOutlineDown ml-2></AiOutlineDown>
            </button>
            {dropdownVisible && (
                <div className='absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow lg'>
                    <button onClick={()=>handleSortOptionClick("client")} className='block px-4 py-2 text-white w-full hover:bg-gray-700'>Name</button>
                    <button onClick={()=>handleSortOptionClick("country")} className='block px-4 py-2 text-white w-full hover:bg-gray-700'>Country</button>
                    <button onClick={()=>handleSortOptionClick("date")} className='block px-4 py-2 text-white w-full hover:bg-gray-700'>Date</button>
                </div>

            )}
            
           </div> 
           <div className="relative ml-4 w-full">
            <button onClick={()=>setFiltersVisible(!filterVisible)} className='border border-gray-700 flex items-center justify-center text-white p-2 rounded'>
                <MdSort className='mr-[0.3rem]'></MdSort> Filters <AiOutlineDown className='ml-2'></AiOutlineDown>
            </button>
            {filterVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg p-4">
                <div className='mb-2'>
                    <label className='block text-white'>Filter By Name :</label>
                    <input type="text" name='name' onChange={handleFilterChange} value={filters.name} className='bg-gray-900 text-white rounded p-2 w-full' />
                </div>
                 <div className='mb-2'>
                    <label className='block text-white'>Filter By Country :</label>
                    <input type="text" name='country' onChange={handleFilterChange} value={filters.country} className='bg-gray-900 text-white rounded p-2 w-full' />
                </div>
                 <div className='mb-2'>
                    <label className='block text-white'>Filter By email :</label>
                    <input type="text" onChange={handleFilterChange} value={filters.email} name='email' className='bg-gray-900 text-white rounded p-2 w-full' />
                </div>
                 <div className='mb-2'>
                    <label className='block text-white'>Filter By Project :</label>
                    <input type="text" name='project' onChange={handleFilterChange} value={filters.project} className='bg-gray-900 text-white rounded p-2 w-full' />
                </div>
                <div className='mb-2'>
                    <label className='block text-white'>Filter By status :</label>
                    <input type="text" name='status' onChange={handleFilterChange} value={filters.status} className='bg-gray-900 text-white rounded p-2 w-full' />
                </div>
                
            </div>
            
        )}  
        </div>
           
        </div>

        
        
        <table className="min-w-full table-auto rounded border border-gray-700 text-white">
            <thead>
                <tr>
                    <th className="px-5 py-3 text-left">Image</th>
                    <th className="px-5 py-3 text-left">Name</th>
                    <th className="px-5 py-3 text-left">Country</th>
                    <th className="px-5 py-3 text-left">Email</th>
                    <th className="px-5 py-3 text-left">Project Name</th>
                    <th className="px-5 py-3 text-left">Task Progress</th>
                    <th className="px-5 py-3 text-left">Status</th>
                    <th className="px-5 py-3 text-left">Date</th>
                    <th className="px-5 py-3 text-left">Action</th>
                    
                </tr>
            </thead>
            <tbody>
                {currentProject.map((project,index)=>(
                    <tr className="border border-gray-700">
                    <td className="px-4 py-2">
                        <img src={project.image} alt={project.client}  className='w-[3rem] h-[3rem] object-cover rounded-full'/>
                    </td>
                    <td px-4 py-2>{project.client}</td>    
                    <td px-4 py-2>{project.country}</td>
                    <td px-4 py-2>{project.email}</td>
                    <td px-4 py-2>{project.project}</td>
                    <td className='px-4 py-2'>
                        <div className="w-24 h-2 bg-gray-700 rounded">
                            <div className="h-2 bg-green-500 rounded"></div>
                        </div>
                    </td>
                    <td className='px-4 py-2 w-[10rem]'>
                        <span>{project.status}</span>
                        
                    </td>
                    <td className='px-4 py-2 '>
                    {project.date}
                    </td>
                    <td className='px-4 py-2'>
                        <div className="relative ">
                            <BsThreeDots className='cursor'></BsThreeDots>
                        </div>
                    </td>
                    
                </tr>
                ))}
                
            </tbody>
        </table>

        <div className="flex justify-end mt-4">
            <button disabled={currentPage===1} onClick={()=>handlePageChange(currentPage-1)} className='px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50'>
                Previous
            </button>
            <span className='px-4 py-2 text-white'>Project {currentPage} of {totalPages}</span>
            <button disabled={currentPage===totalPages} onClick={()=>handlePageChange(currentPage+1)} className='px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50'>
                Next
            </button>
        </div>
    </div>
  )
}

export default Table