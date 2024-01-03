import PageLayout from "./PageLayout";
import React from "react";
import RootLayout from "./RootLayout";

export default function ErrorPage({ title, description }: { title: string, description: string }) {
    return (
        <RootLayout>
            <PageLayout>
                <div className="relative isolate flex items-center h-screen pb-14 -mb-14">

                    <div className=" m-auto max-w-2xl h-40">
                        <div className=" sm:mb-8 sm:flex sm:justify-center">
                            <div
                                className="relative px-3 py-1 text-sm leading-6 ">

                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-4xl font-bold tracking-tight sm:text-3xl">
                                {title ? title : "服务器开小差了, 请稍后重试"}
                            </h4>
                            <p className="mt-6 text-lg leading-8">
                                {description ? description : ""}
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </RootLayout>
    )
}