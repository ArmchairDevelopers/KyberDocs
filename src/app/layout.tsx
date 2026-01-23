import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import '../lib/components/search';
import { Inter } from 'next/font/google';
import DefaultSearchDialog from "@/lib/components/search";

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{SearchDialog: DefaultSearchDialog}}>{children}</RootProvider>
      </body>
    </html>
  );
}
