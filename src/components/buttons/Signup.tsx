"use client";

import AuthModel from "../AuthModel";
import AuthDrawerDialog from "../drawerDialog/AuthDrawerDialog";

function Signup() {
  return (
    <AuthDrawerDialog
      trigger={
        <button className="bg-secondary text-primary hover:bg-secondary-hover rounded-4xl px-4 py-2 transition-colors duration-300 hover:text-[#354308]">
          Signup
        </button>
      }
      content={<AuthModel />}
    />
  );
}

export default Signup;
