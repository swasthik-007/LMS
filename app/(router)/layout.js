import React, { Children } from "react";
import SideNav from "./_components/SideNav";

function layout({ children }) {
  return (
    <div>
      <div className="sm:w-64  hidden  sm:block fixed">
        <SideNav />
      </div>
      <div className="sm:ml-64">{children}</div>
    </div>
  );
}

export default layout;
