import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Nav to section in landing page
export function navToSection(
  section: string,
  behavior: ScrollBehavior = "smooth",
  block: ScrollLogicalPosition = "center",
) {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior, block });
  }
}

// check password rules
export function checkPasswordRules(password: string) {
  console.log(password);

  return {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  };
}
