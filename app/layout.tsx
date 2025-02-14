'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MenuAppBar from "./components/layout/AppBar";
import BasicBreadcrumbs from "./components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>金沢サークルハブ</title>
        <meta name="description" content="金沢・北陸の学生向け、サークル情報まとめサイトです。"/>
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          <main>
            <ThemeProvider theme={theme}>
              <MenuAppBar />
              {children}
              <BasicBreadcrumbs />
            </ThemeProvider>
          </main>
        
        
      </body>
      
    </html>
  );
}
