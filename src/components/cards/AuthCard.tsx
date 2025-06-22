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

      <motion.div className="mt-6 w-full sm:mt-10 md:mt-16" layout>
        <div className="mb-4 space-y-2 text-center sm:mb-6 md:mb-8">
          <h4 className="font-bold md:text-2xl">{title}</h4>
          {subtitle && (
            <p className="text-xs text-[#757575] sm:text-sm md:text-base">
              {subtitle}
            </p>
          )}
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
