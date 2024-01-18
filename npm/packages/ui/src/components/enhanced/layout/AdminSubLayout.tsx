"use client"


import React from "react";
import {cn} from "../../../lib/utils";
import {Separator} from "../../ui/separator";

// import { buttonVariants } from "@jansora/ui/esm/components/ui/button"

interface AdminSubLayoutProps extends React.HTMLAttributes<HTMLElement> {
    description: string
    title: string
}

export function AdminSubLayout({ className, title, description, children }: AdminSubLayoutProps) {

    return (
            <div
                className={cn(
                    "w-full h-full sm:w-2/3 m-10 rounded-2xl border mx-auto space-y-6 p-6 mt-24 pb-16 flex flex-col",
                    className
                )}
            >
                <div className="space-y-1 w-full">
                    <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
                    <p className="text-muted-foreground mt-3">
                        {description}
                    </p>
                </div>
                <Separator className="my-6" />
                <div className="flex space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0 flex-1">
                    {children}
                </div>

            </div>
    )
}

export function AdminSubLayoutAside ({ children, className }: {children: React.ReactNode, className?: string}) {
    return <aside className={cn("sm:w-[200px]", className)}>
        {children}
    </aside>
}

export function AdminSubLayoutContent ({ children, className }: {children: React.ReactNode, className?: string}) {
    return <div className={cn("flex-1 min-h-[500px]", className)}>
        {children}
    </div>
}