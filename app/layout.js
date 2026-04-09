import './globals.css'

export const metadata = {
  title: 'NEXUS // Digital Chronicles',
  description: 'Dispatches from the edge of tomorrow. Tech, AI, and the future — decoded.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
