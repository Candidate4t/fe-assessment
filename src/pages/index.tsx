import { Inter } from 'next/font/google'
import BannerResumePane from '../components/BannerResumePane'
import ReferralStatsBanner from '../components/ReferalStatsBanner'
import StatsPaneItem from '../components/StatsPane'
import { StatsPaneItemAttributes } from '../components/StatsPane'
import PrimaryButton from '../components/PrimaryButton'

const inter = Inter({ subsets: ['latin'] })
const statsPaneItemData: StatsPaneItemAttributes[] = [
  {
    title: "Opportunity",
    color: "#00A3E0",
    icon: "face-smile-regular.svg",
    kpis: [
      { title: "SOLD.com Leads", value: "500", type: "discreet"},
      { title: "Customers we promoted you to", type: "percentage", value: "67"},
      { title: "Appointments set with you", type: "discreet", value: "0"}
    ]
  },
  {
    title: "Wins",
    color: "#84AE2B",
    icon: "face-smile-regular.svg",
    kpis: [
      { title: "Your signed agreements", value: "0", type: "discreet"},
      { title: "Your closings", type: "discreet", value: "0"},
      { title: "Your closed volume", type: "resume", value: "0"},
      { title: "Your commission (est)", type: "resume", value: "0"}
    ]
  },
  {
    title: "Losses",
    color: "#F93822",
    icon: "icon-sad-face.svg",
    kpis: [
      { title: "Appointments that signed with another agent", value: "n/a", type: "discreet"},
      { title: "Lost closings", type: "discreet", value: "n/a"},
      { title: "Lost volume", type: "resume", value: "n/a"},
      { title: "Lost commission (est)", type: "resume", value: "n/a"}
    ]
  }
]

export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-[#25282A] pr-24 pl-24 pt-8 ">
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
      <div className="relative h-36 md:h-50 lg:h-60">
        <div className="absolute inset-0 h-1/2 bg-[#25282A]"></div>
        <div className="absolute inset-0 top-1/2 h-1/2 bg-white"></div>
        <div className="absolute inset-0 flex justify-center items-center pr-12 pl-12">
          <ReferralStatsBanner />
        </div>
      </div >
      <div className="ml-10">
        <p className="font-semibold border-l-8 border-[#F93822] p-1">Since you joined our network, here’s what we’ve been up to in your zip codes:</p>
      </div>
      <div>
        <div className="flex pl-16 pr-16 pt-6 gap-3">
          <StatsPaneItem {...statsPaneItemData[0]} />
          <StatsPaneItem {...statsPaneItemData[1]} />
          <StatsPaneItem {...statsPaneItemData[2]} />
        </div>
        <div className="text-center pt-6 pb-6">
        <h2 className="text-2xl font-bold pl-16 pr-16 pt-6 pb-4">Unsatisfied with these stats? We can help you improve them.</h2>
        <PrimaryButton text="Schedule A Call" onClick={() => { }} />
        </div>
      </div>
    </div>
  )
}
