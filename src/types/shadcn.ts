import { ComponentProps, ReactNode } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export interface UseAvatarProps {
  avatar?: ComponentProps<typeof AvatarPrimitive.Root>;
  avatarImage?: ComponentProps<typeof AvatarPrimitive.Image>;
  avatarFallback?: ComponentProps<typeof AvatarPrimitive.Fallback>;

  src?: string;
  name: string;
}

export interface UseDrawerDialogProps {
  trigger: React.ReactNode;
  content:
    | React.ReactElement<{ onClose?: () => void }>
    | ((props: { onClose: () => void }) => React.ReactNode);
  titleScreenReader: string;
  descriptionScreenReader?: string;
  contentClassName?: string;

  enableDrawer?: boolean;
}

export interface UseSelectProps {
  items: { value: string; label: string }[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  icon?: ReactNode;
}
