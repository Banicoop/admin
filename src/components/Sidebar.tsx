import { useDispatch, useSelector } from 'react-redux';
import { menuData } from '../constant/menuData';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux/slice/authSlice';



const Sidebar = () => {


  const dispatch = useDispatch();

  const role = useSelector((state: any) => state?.auth?.user?.payload?.role);

  if(!role) {
    dispatch(logout())
  }


  const handleLogout = async () => {
    dispatch(logout())
  }
  

  return (
  
    <div className='w-[50px] lg:w-[260px] h-[calc(100vh-85px)] overflow-y-scroll border-r-[1px] flex flex-col top-[85px] left-0 sticky'>
      <div className="px-1 py-6">
        {menuData
          .filter((item) => item.visible.includes(role))
          .map((item) => (
          <NavLink
            to={item.url}
            key={item.name}
            className={({ isActive }) =>
              `flex items-center text-[#000] font-[500] gap-2 p-2 lg:p-3 rounded-full mt-2 ${
                isActive ? "text-[#fff] bg-[#016AFF]" : ""
              }`
            }
          >
            {({ isActive }) => (
                <>
                  <img
                    src={item.icon}
                    alt=""
                    className={`md:ml-[10px] ${isActive ? "icon-white" : ""}`}
                  />
                  <span className="hidden lg:block text-sm">{item.name}</span>
                </>
              )}    
          </NavLink>
          ))}
    </div>

    {/* BOTTOM */}
      <div className="mt-auto mb-[50px] border-t-[1px] flex items-center px-3 py-6 gap-3 cursor-pointer" onClick={handleLogout}>
        <img src='/logout.svg' alt="" className="md:ml-[10px] text-[]" />
        <span className='hidden lg:block text-sm'>Log Out</span>
      </div>
    </div>
  )
}

export default Sidebar;
