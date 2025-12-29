import { Box, BoxContent, Button, Card, CardContent, Column, Columns, Container, Icon, Link, Row, Rows, Section, Text, Title } from "@trilogy-ds/react";

import "./style.css";

const cardData = [
    {
      icon: "tri-users",
      title: "Ouvert à tous",
      description: "Que vous soyez client Bouygues Telecom ou non !",
      footnote: "*2 fois par an !",
    },
    {
      icon: "tri-france",
      title: "Partout en France",
      description: "Le service est accessible dans toutes nos boutiques",
    },
    {
      icon: "tri-calendar",
      title: "Express",
      description:
        "Entre 1 et 5 jours, et pour près d'un client sur 2, la réparation est réalisée en 24h !",
    },
    {
      icon: "tri-mobile-tools",
      title: "Garantie de qualité",
      description:
        "Réparation réalisée par notre partenaire WiFix et garantie 1 an (i)",
    },
  ];

  const isMobile = window.matchMedia("(max-width: 768px)").matches;


  const DesktopView = () => (

  cardData.map((card, index) => (

                      <Card fullheight className="card-backgound-color">
                        <CardContent className="center">
                          <Icon
                            name={card.icon}
                            color="SUCCESS"
                            size={"large"}
                          />
                          <Title level={6} inverted className="card-text-colorr">
                            {card.title}
                          </Title>
                          <Text level={1} inverted className="card-text-colorr">
                            {card.description}
                          </Text>
                        </CardContent>
                      </Card>
                   ))
  )

  const MobileView = () => (
    <Card fullheight className="card-backgound-color">
                        <CardContent className="center">
                          <Icon
                            name={cardData[0].icon}
                            color="SUCCESS"
                            size={"large"}
                          />
                          <Title level={6} inverted className="card-text-colorr">
                            {cardData[0].title}
                          </Title>
                          <Text level={1} inverted className="card-text-colorr">
                            {cardData[0].description}
                          </Text>
                        </CardContent>
                      </Card>
  )




export default function ExpressRepairSection() {
return (
      <Section backgroundColor="MAIN">
      <Card  fullheight className="card-backgound-color">
                                <CardContent className="center">
                                        <Icon
                                          name="tri-mobile-tools"
                                          color="SUCCESS"
                                          size={"large"}
                                          >
                                        </Icon>
                    
                                    <Title 
                                    level={2}
                                    typo="has-text-centered has-text-white">
                                        Bénéficiez du service<br/>de réparation express en boutique*
                                    </Title>
                                   <Button  className="btn-style"> Trouver ma boutique </Button>
                                   <Columns>
                                   <Column>
                                   <Box className="box-style">
                <BoxContent backgroundColor="MAIN">
                  <Title
                    typo="has-text-white has-text-centered"
                    level={isMobile?6:5}
                    className="comment-style"
                  >
                    Avec Bouygues Telecom, la réparation c’est…
                  </Title>

                  <div className="columns multiline">

                    {isMobile ? <MobileView /> : <DesktopView />}
                    { isMobile &&
                                    <div className="dots-container">
                                    <div className="dots">
                                        <div className="dot activee"></div>
                                        <div className="dot notActivee"></div>
                                        <div className="dot notActivee"></div>
                                        <div className="dot notActivee"></div>
                                    </div>
                                </div>
                                

                                }
                      
                  </div>
                </BoxContent>
              </Box>
                                   </Column>
                                   </Columns>
                                </CardContent>
                        </Card>
    </Section>
  );
}

/*

<Rows>
        <Row className="content-center"> 
            <Icon
            name="tri-mobile-tools"
            color="SUCCESS"
            size={"large"}
            >
            </Icon>
        </Row>
        <Row>
          <Title
            typo="has-text-white  has-text-centered"
            level={2}
          >
            Bénéficiez du service<br/>de réparation express en boutique*
          </Title>
        </Row>
        <Row>
          <Button  variant="SECONDARY">  Trouver ma boutique </Button>
        </Row>
        <Row>
        </Row>
        <Row>
          <Column>
            <Text
              typo="has-text-centered"
              inverted
              level={3}
            >
              * Retrouvez les conditions et informations détaillées du service de réparation dans la FAQ accessible en bas de page. Kit-mains libre recommandé.
            </Text>
          </Column>
        </Row>
      </Rows>
      */