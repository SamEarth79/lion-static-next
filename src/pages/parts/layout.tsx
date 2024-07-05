import { Inter } from "next/font/google";
import "../../app/globals.css";

import Header from "@/components/Header/Header";
import React from "react";
import Footer from "@/components/Footer/Footer";
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
                <Footer />
            </body>
        </html>
    );
}
