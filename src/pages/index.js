import TitleBar from '@/components/TitleBar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Dashboard from './Dashboard'
import LoginPage from './loginPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <LoginPage />
}
