

const Splash = () => {
    return(
        <div className="h-[100vh] bg-white w-[100vw]">
            <div className="flex flex-col justify-center h-full items-center">
                <div className="flex flex-col justify-center h-full items-center m-auto">
                    <img src="/admin.svg" alt="" className="h-30 w-30" />
                    <span className="text-bgPurple font-semibold text-[3rem]">Admin</span>
                </div>

                <p className="mt-auto mb-[2rem] font-[500] text-[#000]">Welcome to Banicoop Admin Panel!</p>

            </div>
        </div>
    )
}

export default Splash;
