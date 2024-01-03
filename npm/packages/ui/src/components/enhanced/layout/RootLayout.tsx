import {Toaster} from "../../ui/toaster";
import {ThemeProvider} from "../plugins/theme/theme-provider";
import React from "react";
import '../../../css/default.css'
import {FunctionComponentProps} from "../../../lib/declares";


export default async function RootLayout({children}: FunctionComponentProps) {

    return (
        <html lang="zh" suppressHydrationWarning>
            <body className="h-screen vsc-initialized" cz-shortcut-listen="true">
                <Toaster/>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
                    {children}
                </ThemeProvider>
            </body>
        </html>

    )
}


