import { Container, Section, Tab, TabList, Tabs } from "@trilogy-ds/react";

const tabs = [
  { id : 1, label: "WeFix" },
  { id : 2, label: "Réparation express en boutique" },
  { id : 3, label: "Avantages client" },
  { id : 4, label: "Forfaits" },
  { id : 5, label: "L'assurance" },
  { id : 6, label: "Une question ?" },
];

import "./style.css";

export default function NavSection() {
return (
    <Section backgroundColor="WHITE">
        <Tabs className="tab-height">
         <TabList>
             {tabs.map((tab) => (
              <Tab
                key={tab.id}
                label={tab.label}
                active={tab.id == 1}
                className={tab.id == 1?"active":"notActive"}
                />
             ))}
         </TabList>
        </Tabs>
    </Section>
  );
}