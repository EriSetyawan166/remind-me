import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Separator } from "@radix-ui/react-context-menu";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn(inter.className, "dark")}
        style={{
          colorScheme: "dark",
        }}>
        <body>
          <ThemeProvider>
            <div
              className="
            flex
            min-h-screen
            w-full
            flex-col
            items-center
            dark:bg-black"
            >
              <NavBar />
              <Separator />
              <main
                className="flex flex-grow w-full justify-center items-center dark:bg-neutral-950"
              >
                {children}
                <Toaster />
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
