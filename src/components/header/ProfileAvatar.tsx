import { useUser } from "@/context/UserContext";
import { LogOut } from "lucide-react";
import UseAvatar from "../UsedShadcn/UseAvatar";
import UsePopover from "../UsedShadcn/UsePopover";

function ProfileAvatar() {
  const { user, logout } = useUser();

  if (!user) return;

  return (
    <UsePopover
      trigger={
        <UseAvatar
          name={user.name}
          avatar={{ className: "h-10 w-10" }}
          avatarFallback={{
            className: "bg-secondary text-primary hover:bg-secondary-hover",
          }}
        />
      }
      content={
        <div className="space-y-3">
          <h5 className="text-xs text-[#969792]">Account</h5>
          <div className="space-y-3 px-4 text-sm">
            {/* <button className="text-txt flex items-center gap-2">
              <Key size={18} />
              My API Key
            </button>
            <Separator className="border" /> */}
            <button
              className="flex items-center gap-2 text-red-600"
              onClick={logout}
            >
              <span className="scale-x-[-1]">
                <LogOut size={18} />
              </span>
              Logout
            </button>
          </div>
        </div>
      }
      popoverContent={{
        side: "bottom",
        align: "end",
        className: "mt-2 border shadow-land-price",
      }}
    />
  );
}

export default ProfileAvatar;
