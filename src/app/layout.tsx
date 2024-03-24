import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Geologica } from 'next/font/google';

const montserrat = Geologica({
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
});

export const metadata = {
	title: 'AIA',
	description: "United For Progress",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</head>
			<body suppressHydrationWarning={true} className={montserrat.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
