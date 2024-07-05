import { Inter } from "next/font/google";
import "../app/globals.css";

import  Header from '../../app/components/Header/Header';
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
