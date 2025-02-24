import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display ">
          <div className="artboard artboard-demo phone-1">
            {/* Outlet */}
            <div className="min-h-screen flex items-center justify-center overflow-y-scroll py-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      {/* Outlet
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div> */}
    </div>
  );
};

export default Main;
