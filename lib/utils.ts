import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const axiosInstance = axios.create({
  baseURL: "/api",
});


export const phpInstance = axios.create({
  // baseURL: "https://rend-application.abaqas.in"
  baseURL: "http://localhost/students_backend/"

      
});

export const phpInstances = axios.create({
  baseURL: "https://rendezvous.abaqas.in/"
      
});