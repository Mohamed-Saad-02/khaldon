import useIsOnline from "@/hooks/useIsOnline";
import AuthDrawerDialog from "../drawerDialog/AuthDrawerDialog";
import showToast from "../UsedShadcn/UseToast";

function Signup() {
  const isOnline = useIsOnline();

  if (!isOnline)
    return (
      <button
        onClick={() =>
          showToast({
            title: "You’re Offline",
            description:
              "You’ve lost internet connection. Some features may not work.",
          }).warning()
        }
        className="bg-secondary text-primary hover:bg-secondary-hover rounded-4xl px-4 py-2 transition-colors duration-300 hover:text-[#354308]"
      >
        Signup
      </button>
    );

  return (
    <AuthDrawerDialog
      trigger={
        <button className="bg-secondary text-primary hover:bg-secondary-hover rounded-4xl px-4 py-2 transition-colors duration-300 hover:text-[#354308]">
          Signup
        </button>
      }
    />
  );
}

export default Signup;
