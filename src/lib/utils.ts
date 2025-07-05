import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as jwt from "jwt-decode";
import showToast from "@/components/UsedShadcn/UseToast";

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
  return {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  };
}

// Decode Token
export function decodeToken(token: string) {
  try {
    const decoded = jwt.jwtDecode(token);

    return decoded;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}

// Check token expiration
export function isTokenExpired(token: string) {
  const decoded = decodeToken(token);
  if (!decoded) return true;

  const expirationTime = decoded.exp! * 1000;
  return expirationTime < Date.now();
}

// auto logout
export function autoLogout() {
  const token = localStorage.getItem("token");
  if (token && isTokenExpired(token)) {
    localStorage.removeItem("token");
    showToast({
      title: "Session Expired",
      description: "You have been logged out due to inactivity.",
    }).error();
  }
}

// Price
export const formattedPrice = (number: number) =>
  number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
