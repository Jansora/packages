"use client"

import * as React from "react"
import {MoonIcon, SunIcon} from "@radix-ui/react-icons"
import {useTheme} from "next-themes"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "../../../ui/dropdown-menu"


export default function ThemeToggle() {
    const { setTheme } = useTheme()

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className="flex ">
                <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={19} className=" min-w-[5rem] ">
            <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
                System
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

    //
    // if (theme === "light") {
    //     return <SunIcon onClick={() => setTheme("dark")} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
    // }
    // if (theme === "dark") {
    //     return <MoonIcon onClick={() => setTheme("light")} className=" h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all " />
    // }
    // return <MoonIcon onClick={() => setTheme("light")} className=" h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all " />
    //
    // return (
    //     <span>
    //         {
    //             theme === "light" &&
    //             <SunIcon onClick={() => setTheme("dark")} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //         }
    //         {/*{*/}
    //         {/*    theme === "dark" &&*/}
    //         {/*    <MoonIcon onClick={() => setTheme("light")} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />*/}
    //         {/*}*/}
    //         <MoonIcon onClick={() => setTheme("light")} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //
    //         {/*{*/}
    //         {/*    theme === "system" &&*/}
    //         {/*    <MoonIcon onClick={() => setTheme("light")} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />*/}
    //         {/*}*/}
    //         {/*<MoonIcon onClick={() => setTheme("light")} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />*/}
    //     </span>
    // )
}
