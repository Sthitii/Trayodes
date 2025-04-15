import RootLayout from './layout';

export const metadata = {
  metadataBase: new URL('https://www.trayodes.com'),
  title: 'Trayodes - Business Solutions',
  description: 'Professional business solutions and services offered by Trayodes',
  keywords: 'trayodes, business solutions, services, consulting',
  openGraph: {
    title: 'Trayodes - Business Solutions',
    description: 'Professional business solutions and services offered by Trayodes',
    url: '/',
    siteName: 'Trayodes',
    images: [
      {
        url: '/images/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Trayodes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trayodes - Business Solutions',
    description: 'Professional business solutions and services offered by Trayodes',
    images: ['/images/twitter-image.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MetadataLayout({ children }) {
  return <RootLayout>{children}</RootLayout>;
}