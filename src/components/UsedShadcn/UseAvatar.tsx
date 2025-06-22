import { UseAvatarProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function UseAvatar({
  src,
  name,
  avatar,
  avatarImage,
  avatarFallback,
}: UseAvatarProps) {
  const splitName = name.split(" ");
  const firstName = splitName[0];
  const lastName = splitName[splitName.length - 1];

  const fallback = firstName.slice(0, 1) + lastName.slice(0, 1);

  return (
    <Avatar {...avatar}>
      <AvatarImage src={src} {...avatarImage} />
      <AvatarFallback {...avatarFallback}>{fallback}</AvatarFallback>
    </Avatar>
  );
}

export default UseAvatar;
