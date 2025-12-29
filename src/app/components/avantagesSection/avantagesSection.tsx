import { Card, CardContent, Column, Columns, Icon, Row, Rows, Section, Title, Text, Box } from "@trilogy-ds/react";
import "./style.css";


const isMobile = window.matchMedia("(max-width: 768px)").matches;

const avantages = [
    {
      title: "-30% de remise* valables sur toutes les réparations",
      description: "et -20% de remise sur les autres réparations effectuées lors de la même prise en charge",
      extra: "*2 fois par an !",
      active:false,
      icon: "tri-sun-euro",
    },
    {
      title: "On vous prête un smartphone",
      description: "le temps de la réparation (i)",
      extra: "",
      active:false,
      icon: "tri-mobile",
    },
    {
      title: "Faites profiter de la remise de 30% à un proche",
      description: "que le téléphone ait été acheté chez Bouygues Telecom ou ailleurs !",
      extra: "",
      active:true,
      icon: "tri-users",
    },
  ];

export default function AvantagesSection() {
return (
    <Section backgroundColor="NEUTRAL_FADE">
      <Rows>
        <Row>
            <Title
            level={2}
            typo="has-text-main has-text-weight-bold has-text-centered"
            >
            Et encore plus d'avantages si vous êtes client <br/>Bouygues Telecom !
        </Title>
        </Row>
        <Row>
            <Columns multiline align="ALIGNED_CENTER" gap={4} >
            {avantages.map((avantage, index) => (
                <Column key={index} size={3} align="ALIGNED_CENTER">
                    <Card fullheight className={avantage.active?"card active":"card"}> 
                        <CardContent>
                            <Icon name={avantage.icon} size={isMobile?"medium":"large"} />
                            <Title level={4}  >{avantage.title}</Title>
                            <Text level={1}  >{avantage.description}</Text>
                            {avantage.extra && <Text level={3}> {avantage.extra}</Text>}
                        </CardContent>
                    </Card>
                </Column>
            ))}
            </Columns>
        </Row>
      </Rows>
    </Section>
  );
}