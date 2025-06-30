import NetworkWatcher from "./NetworkWatcher";
import { Toaster } from "./ui/sonner";

function AppGlobals() {
  return (
    <>
      <Toaster
        duration={5000}
        position="top-right"
        className="!font-sans"
        toastOptions={{
          classNames: {
            title: "!font-bold !text-base",
            description: "!text-sm !text-default",
            icon: "!text-green-500 !mb-auto !mt-2",
            content: "!me-auto",
          },
          className:
            "!text-default !gap-3 !shadow-[0px_16px_20px_-8px_#0305121A] !rounded-2xl !border !w-[350px] !justify-between",
        }}
      />

      <NetworkWatcher />
    </>
  );
}

export default AppGlobals;
