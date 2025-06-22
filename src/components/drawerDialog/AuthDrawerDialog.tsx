import { UseDrawerDialogProps } from "@/types";
import UseDrawerDialog from "../UsedShadcn/UseDrawerDialog";
import { useUser } from "@/context/UserContext";

function AuthDrawerDialog({
  ...props
}: Pick<UseDrawerDialogProps, "trigger" | "content">) {
  const { user, isUserReady } = useUser();

  return (
    <UseDrawerDialog
      {...props}
      titleScreenReader="Auth Dialog"
      descriptionScreenReader="Auth Dialog"
      contentClassName="rounded-2xl p-6 sm:p-8 md:p-12 "
      enableDrawer={isUserReady && !user}
    />
  );
}

export default AuthDrawerDialog;
