import ChartComponent from "@/components/ChartComponent";
import Connect from "@/components/Connect";
import Education from "@/components/Education";
import ExpCards from "@/components/ExpCards";
import ExperienceComponent from "@/components/ExperienceComponent";
import Experiences from "@/components/Experiences";
import Foooter from "@/components/Footer";
import Header from "@/components/Header";
import LatestService from "@/components/LatestService";
import Logos from "@/components/Logos";
import MySkill from "@/components/MySkill";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Portfolio from "@/components/portfolio";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <Header />
      <Experiences />
      <ExpCards />
      <ChartComponent />
      <LatestService />
      <Education />
      <ExperienceComponent />
      <Logos />
      <Portfolio/>
      <MySkill />
      <Slider/>
      <Connect />
      <News />
      {/* <Foooter /> */}
    </div>
  );
}
