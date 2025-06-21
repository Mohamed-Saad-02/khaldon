import { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface AuthCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  children: ReactNode;
  currentStepKey: string; // مهم علشان يعرف كل Form بتميّزه
}

function AuthCard({
  icon,
  title,
  subtitle,
  children,
  currentStepKey,
}: AuthCardProps) {
  return (
    <motion.div
      className="text-default flex flex-col items-center justify-center"
      layout
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {icon}

      <motion.div className="mt-16 w-full" layout>
        <div className="mb-8 space-y-2 text-center">
          <h4 className="text-2xl font-bold">{title}</h4>
          {subtitle && <p className="text-[#757575]">{subtitle}</p>}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepKey}
            layout
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default AuthCard;
