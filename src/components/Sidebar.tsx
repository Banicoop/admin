import { useDispatch, useSelector } from 'react-redux';
import { menuData } from '../constant/menuData';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../redux/slice/authSlice';



const Sidebar = () => {

  const location = useLocation();
  const dispatch = useDispatch();

  const role = useSelector((state: any) => state?.auth?.user?.payload?.role);

  if(!role) {
    dispatch(logout())
  }


  const handleLogout = async () => {
    dispatch(logout())
  }
  

  return (
  
    <div className='w-[50px] lg:w-[260px] h-[93vh] fixed border-r-[1px] flex flex-col mb-4'>
      <div className="px-1 py-6">

        {menuData
          .filter((item) => item.visible.includes(role))
          .map((item) => (
              <Link 
              to={item.url} 
              key={item.name} 
              className={`flex items-center text-[#000] font-[500] gap-2 p-2 lg:p-3 rounded-full mt-2 ${
                location.pathname === item.url && 'text-[#fff] bg-[#6922D1]'
              }`}
            >
              <img src={item.icon} alt="" className="md:ml-[10px]" style={{ color: '#6922D1' }} />
              <span className="hidden lg:block text-sm">{item.name}</span>
            </Link>
          ))}
    </div>

    {/* BOTTOM */}
      <div className="mt-auto border-t-[1px] flex items-center px-3 py-6 gap-3 cursor-pointer" onClick={handleLogout}>
        <img src='/logout.svg' alt="" className="md:ml-[10px] text-bgPurple" />
        <span className='hidden lg:block text-sm'>Log Out</span>
      </div>
    </div>
  )
}

export default Sidebar;
