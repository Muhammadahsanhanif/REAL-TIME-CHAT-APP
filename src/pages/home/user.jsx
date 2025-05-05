import React from "react";

const User = () => {
  return (
    <div className="flex gap-5 items-center">
      <div className="indicator">
        <span className="indicator-item badge badge-success badge-xs"></span>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="line-clamp-1">Full name</h2>
        <p className="text-xs">Username</p>
      </div>
    </div>
  );
};

export default User;
