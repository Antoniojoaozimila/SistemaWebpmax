import NavBar from '@/components/NavBar';
import './globals.css';

import SideBar from '@/components/SideBar';

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className='grid [grid-template-columns:250px_1fr] min-h-[100vh]'>
        <div>
        <SideBar/>
        </div>

        <div>
          <NavBar/>
        </div>
      </body>
    </html>
  )
}
