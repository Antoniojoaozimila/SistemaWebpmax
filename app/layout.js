import './globals.css';

import SideBar from '@/components/SideBar';

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <div>
        <SideBar/>
        </div>

        <div></div>
      </body>
    </html>
  )
}
