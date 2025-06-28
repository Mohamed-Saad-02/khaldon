import { ComponentProps, ReactNode } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ActionsProps } from "./form";

// UseAvatar
export interface UseAvatarProps {
  avatar?: ComponentProps<typeof AvatarPrimitive.Root>;
  avatarImage?: ComponentProps<typeof AvatarPrimitive.Image>;
  avatarFallback?: ComponentProps<typeof AvatarPrimitive.Fallback>;

  src?: string;
  name: string;
}

// UseDrawerDialog
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

// UseSelect
export interface UseSelectProps {
  items: { value: string; label: string }[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  icon?: ReactNode;
}

// User Popover
export interface UsePopoverProps {
  trigger: ReactNode;
  content: ReactNode;

  popover?: ComponentProps<typeof PopoverPrimitive.Root>;
  popoverTrigger?: ComponentProps<typeof PopoverPrimitive.Trigger>;
  popoverContent?: ComponentProps<typeof PopoverPrimitive.Content>;
}

// UserTabs
export interface UseTabsProps<T extends string> {
  defaultValue: T;
  tabList: {
    value: T;
    label: string;
    renderContent: (
      value: T,
      handleChange: (val: T) => void,
      actions?: ActionsProps,
    ) => React.ReactNode;
  }[];
  activeTabList?: boolean;
  actions?: ActionsProps;
}
