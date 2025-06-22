"use client";

import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { UseDrawerDialogProps } from "@/types";

const UseDrawerDialog = ({
  trigger,
  content,
  titleScreenReader,
  descriptionScreenReader,
  contentClassName,
  enableDrawer = true,
}: UseDrawerDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleClose = () => setOpen(false);

  const clonedElement =
    typeof content === "function"
      ? content({ onClose: handleClose })
      : React.cloneElement(content, {
          onClose: handleClose,
        });

  const component = isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={contentClassName}>
        <VisuallyHidden>
          <DialogTitle>{titleScreenReader}</DialogTitle>
        </VisuallyHidden>

        {clonedElement}

        <DialogDescription asChild>
          <VisuallyHidden>{descriptionScreenReader}</VisuallyHidden>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className={contentClassName}>
        <DrawerHeader className="hidden">
          <DrawerTitle>{titleScreenReader}</DrawerTitle>
        </DrawerHeader>

        {clonedElement}

        <DrawerDescription asChild>
          <VisuallyHidden>{descriptionScreenReader}</VisuallyHidden>
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  );

  return enableDrawer ? component : trigger;
};

export default UseDrawerDialog;
