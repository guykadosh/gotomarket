import { ContactModalProvider } from '@/components/ContactModalContext'
import HomeContent from '@/components/HomeContent'

export default function Home() {
  return (
    <ContactModalProvider>
      <HomeContent />
    </ContactModalProvider>
  )
}
