import { User } from "@/types";
import UseAvatar from "../UsedShadcn/UseAvatar";

function ProfileAvatar({ user }: { user: User }) {
  return (
    <UseAvatar
      name={user.name}
      avatar={{ className: "h-10 w-10" }}
      avatarFallback={{
        className: "bg-secondary text-primary hover:bg-secondary-hover",
      }}
    />
  );
}

export default ProfileAvatar;
