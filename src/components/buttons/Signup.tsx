"use client";

import AuthModel from "../AuthModel";
import UseDrawerDialog from "../UseDrawerDialog";

function Signup() {
  return (
    <UseDrawerDialog
      trigger={
        <button className="bg-secondary text-primary hover:bg-secondary-hover rounded-4xl px-4 py-2 transition-colors duration-300 hover:text-[#354308]">
          Signup
        </button>
      }
      content={<AuthModel />}
      titleScreenReader="Signup Dialog"
      descriptionScreenReader="Signup Dialog"
      contentClassName="rounded-2xl p-12"
    />
  );
}

export default Signup;
