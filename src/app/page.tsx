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
import TakeAway from "./components/takeawaySection/takeawaySection";
import Tips from "./components/tips/tips";
import WeFix from "./components/wefix/wefix";
import Hero from "./components/hero/hero";

const isMobile = window.matchMedia("(max-width: 768px)").matches;


export default function Page() {
    return (
        <main>
            <Hero></Hero>
            {!isMobile&&<NavSection/>}
            <WeFix></WeFix>
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
