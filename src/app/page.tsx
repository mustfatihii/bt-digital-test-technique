"use client";

import AvantagesSection from "./components/avantagesSection/avantagesSection";
import DurabilitySection from "./components/durability/durable";
import EnvironnementSection from "./components/environment/environment";
import ExpressRepairSection from "./components/expressRepairSection/expressRepairSection";
import ForfaitsSection from "./components/forfaitsSection/forfaitsSection";
import InsuranceSection from "./components/insuranceSection/insurance";
import LegalSection from "./components/legal/legal";
import NavSection from "./components/navSection/navSection";
import ProblemsSection from "./components/problemsSection/problemsSection";
import QuestionsSection from "./components/questions/questions";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import TakeAway from "./components/takeawaySection/takeawaySection";
import Tips from "./components/tips/tips";

const isMobile = window.matchMedia("(max-width: 768px)").matches;


export default function Page() {
    return (
        <main>
            <Section1></Section1>
            {!isMobile&&<NavSection/>}
            <Section2></Section2>
            <ExpressRepairSection></ExpressRepairSection>
            <AvantagesSection></AvantagesSection>
            <ForfaitsSection></ForfaitsSection>
            <ProblemsSection></ProblemsSection>
            <InsuranceSection></InsuranceSection>
            <EnvironnementSection></EnvironnementSection>
            <DurabilitySection></DurabilitySection>
            <QuestionsSection></QuestionsSection>
            {isMobile&&<TakeAway></TakeAway>}
            <Tips></Tips>
            <LegalSection></LegalSection>
        </main>
    );
}
