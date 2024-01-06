import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont",
});

export const metadata: Metadata = {
    title: "Raudy Brito",
    description: "The Portfolio of Raudy Brito",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <body className={`${montserrat.variable} font-sans`}>{children}</body>
            </ThemeProvider>
        </html>
    );
}

