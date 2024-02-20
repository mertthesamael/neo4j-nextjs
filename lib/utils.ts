import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateRandomString = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
}



export const fakeLoader = async (delay: number) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved')
    }, delay);
  })

}


export const userNameValidation = (userName:string) => {
  // Check if username is empty or contains invalid characters
  if (!userName || /[ '"\t\r\n]/.test(userName)) {
    return true; // Invalid username
  }
  return false; // Valid username
}