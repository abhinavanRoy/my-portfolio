/* Modules */
import clsx from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function getCurrentYear() {
    let currYear = new Date().getFullYear()
    return currYear;
}
