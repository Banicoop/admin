import { useDispatch } from 'react-redux';
import { menuData } from '../constant/menuData';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../redux/slice/authSlice';



const Sidebar = () => {


  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout())
    localStorage.removeItem('loginData'); 
    localStorage.removeItem('user');
    localStorage.clear()
    window.location.replace('/auth/login');
  }
  

  return (
  
    <div className='w-[250px] min-h-full border-r-[1px] flex flex-col mb-4'>
      <div className="px-1 py-6 h-full">
        <div className="flex gap-4 items-center ml-[20px]">
          <img src="/logo1.svg" alt="" className="" />
          <img src="/banicoop.svg" alt="" className="" />
        </div>

        {menuData.map((item) => (
          <Link 
            to={item.url} 
            key={item.name} 
            className={`flex items-center text-[#000] font-[500] gap-2 p-2 lg:p-3 rounded-full mt-2 ${
              location.pathname === item.url ? 'text-[#fff] bg-[#6922D1]' : ''
            }`}
          >
            <img src={item.icon} alt="" className="md:ml-[10px]" style={{ color: '#6922D1' }} />
            <span className="hidden md:block md:text-xs lg:text-sm">{item.name}</span>
          </Link>
        ))}
    </div>

    {/* BOTTOM */}
      <div className="mt-auto border-t-[1px] flex items-center px-3 py-6 gap-3 cursor-pointer" onClick={handleLogout}>
        <img src='/logout.svg' alt="" className="md:ml-[10px] text-bgPurple" />
        <span className='hidden md:block text-sm'>Log Out</span>
      </div>
    </div>
  )
}

export default Sidebar;
