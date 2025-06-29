"use client";

import { ToastConfig, ToastProps, ToastType } from "@/types";
import { X } from "lucide-react";
import { toast } from "sonner";
import UseCheckCircleIcon from "../ui/icons/UseCheckCircleIcon";
import UseInfoCircleIcon from "../ui/icons/UseInfoCircleIcon";

const TOAST_CONFIG: ToastConfig = {
  success: {
    icon: <UseCheckCircleIcon type="success" />,
    color: "#14AE5C",
    bgClass: "!bg-[#E5FCF1]",
    borderClass: "!border-[#009951]",
  },
  info: {
    icon: <UseCheckCircleIcon type="info" />,
    color: "#4B85F5",
    bgClass: "!bg-[#EDF2FD]",
    borderClass: "!border-[#4B85F5]",
  },
  error: {
    icon: <UseInfoCircleIcon type="error" />,
    color: "#F04349",
    bgClass: "!bg-[#FDECEC]",
    borderClass: "!border-[#F04349]",
  },
  warning: {
    icon: <UseInfoCircleIcon type="warning" />,
    color: "#000",
    bgClass: "!bg-[#FFFAE8]",
    borderClass: "!border-[#BF6A02]",
  },
};

function showToast({ title, description }: ToastProps) {
  const createToast = (type: ToastType) => {
    const config = TOAST_CONFIG[type];

    const t = toast[type](title, {
      description,
      icon: config.icon,
      action: (
        <button onClick={() => toast.dismiss(t)} className="mb-auto">
          <X size={24} color={config.color} />
        </button>
      ),
      className: `${config.bgClass} ${config.borderClass}`,
    });

    return t;
  };

  return {
    success: () => createToast("success"),
    info: () => createToast("info"),
    error: () => createToast("error"),
    warning: () => createToast("warning"),
  };
}

export default showToast;
