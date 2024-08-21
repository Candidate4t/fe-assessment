import { Inter } from 'next/font/google'
import BannerResumePane from '../components/BannerResumePane'
import ReferralStatsBanner from '../components/ReferalStatsBanner'
import StatsPaneItem from '../components/StatsPane'
import { StatsPaneItemAttributes } from '../components/StatsPane'

const inter = Inter({ subsets: ['latin'] })
const statsPaneItemData: StatsPaneItemAttributes = {
  title: "Opportunity",
  color: "#00A3E0",
  icon: "face-smile-regular.svg",
  kpis: [
    { title: "SOLD.com Leads", value: "500", type: "discreet", is_resume: false },
    { title: "Promoted Customers", type: "percentage", value: "67", is_resume: true }
  ]
}

export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-[#25282A] p-8">
        <div className="flex gap-[6.5rem]">
          <div className="flex-1 pl-10">
            <h1 className="text-2xl font-bold text-white">SOLD.com Difference</h1>
            <p className="text-base text-white mt-4">Unlike other lead sources and portals, we don’t focus on worthless metrics like impressions or even leads. SOLD.com shows you how many clients actually cross the finish line and buy or sell a home</p>
            <br />
            <p className="text-base text-white">After all, isn’t that the metric that matters most?</p>
          </div>
          <div className="flex-1 pr-16">
            <BannerResumePane />
          </div>
        </div>
      </div>
      <div className="relative h-48 md:h-64 lg:h-80">
        <div className="absolute inset-0 h-1/2 bg-[#25282A]"></div>
        <div className="absolute inset-0 top-1/2 h-1/2 bg-white"></div>
        <div className="absolute inset-0 flex justify-center items-center pr-12 pl-12">
          <ReferralStatsBanner />
        </div>
      </div >
      <div>
      <div className="flex justify-center items-center p-16 gap-4">
      <StatsPaneItem {...statsPaneItemData}/>
      <StatsPaneItem {...statsPaneItemData}/>
      <StatsPaneItem {...statsPaneItemData}/>
      </div>
      </div>
    </div>
  )
}
