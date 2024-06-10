import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { Wotfard } from "@/public/fonts";
import { Navbar } from "@/components/navbar";
import { ModeToggle } from "@/components/mode_toggle";

export const metadata = {
  title: "Home",
  description: "Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Wotfard.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed z-50 flex justify-center space-x-2 p-2 w-full">
            <Navbar />
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
