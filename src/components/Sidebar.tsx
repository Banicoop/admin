import { menuData } from '../constant/menuData';
import { Link } from 'react-router-dom';



const Sidebar = () => {

  const handleLogout = async () => {
    localStorage.removeItem('loginData'); 
    localStorage.removeItem('user');
    window.location.replace('/auth/login');
  }
  

  return (
  
    <div className='w-[250px] min-h-full border-r-[1px] flex flex-col mb-4'>
      <div className="px-1 py-6">
        <div className="flex gap-4 items-center ml-[20px]">
          <img src="/logo1.svg" alt="" className="" />
          <img src="/banicoop.svg" alt="" className="" />
        </div>

         { menuData.map((item) => (
          <Link to={item.url} key={item.name} className="flex items-center gap-2 p-3 hover:bg-[#fafafa] hover:text-[#6922D1] rounded-full mt-2">
            <img src={item.icon} alt="" className="md:ml-[10px] text-bgPurple" />
            <span className='hidden md:block text-sm'>{item.name}</span>
          </Link>
         ))}


    {/* BOTTOM */}
      <div className="mt-auto border-t-[1px] flex items-center px-3 py-6 gap-3 cursor-pointer" onClick={handleLogout}>
        <img src='/logout.svg' alt="" className="md:ml-[10px] text-bgPurple" />
        <span className='hidden md:block text-sm'>Log Out</span>
      </div>
    </div>
    </div>
  )
}

export default Sidebar;
