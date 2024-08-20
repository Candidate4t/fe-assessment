import { Inter } from 'next/font/google'
import { BannerResumePane } from 'components/BannerResumePane'
import PrimaryButton from 'components/PrimaryButton'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <BannerResumePane/>
        <PrimaryButton text="Schedule a Demo" onClick={() => console.log('clicked')} />
    </>
  )
}
