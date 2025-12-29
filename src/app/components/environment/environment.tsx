import { Box, BoxContent, Card, CardContent, Column, Columns, Icon, Link, Row, Rows, Section, Title, Text } from "@trilogy-ds/react";
import "./style.css";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

export default function EnvironnementSection() {
return (
    <Section backgroundColor="MAIN">
      <Rows>
        <Row  className="icon-center">
            <Icon
            name="tri-mobile-reconditionned"
            color="WHITE"
            size={"large"}
            >
            </Icon>
        </Row>
        <Row>
          <Title
            typo="has-text-white  has-text-centered"
            level={2}
          >
            Réparer son téléphone, c'est aussi un geste
            <br />
            pour l'environnement
          </Title>
        </Row>
        <Row>
          <Title
            typo="has-text-white has-text-centered"
            level={5}
          >
            Prolongez la durée de vie
            de votre téléphone :
          </Title>
        </Row>
        <Row>
          <Columns align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER" className="container-border">
          <Column size={9}>
          <Box className="box-style">
                <BoxContent backgroundColor="MAIN">
                  <Title
                    typo="has-text-white has-text-centered"
                    level={3}
                    className="comment-style"
                  >
                    Comment ?
                  </Title>

                  <div className="columns multiline mobile scrollable">
                      <Card fullheight className="card-backgound-color">
                        <CardContent className="card-text">
                          <Icon
                            name="tri-mobile-up-down"
                            color="SUCCESS"
                            size={"large"}
                          />
                          <Title level={4} inverted>
                            Environnement
                          </Title>
                          <Text level={1} inverted  >
                            En évitant la production d'un nouveau mobile et
                            ses conséquences sur l'environnement.
                          </Text>
                        </CardContent>
                      </Card>
                    
                      <Card fullheight className="card-backgound-color">
                        <CardContent className="card-text">
                          <Icon
                            name="tri-recycle"
                            color="SUCCESS"
                            size={"large"}
                          />
                          <Title level={4} inverted >
                            Recyclage
                          </Title>
                          <Text level={1} inverted >
                            En permettant le{" "}
                            <Link
                              inverted
                              blank
                            >
                              recyclage
                            </Link>{" "}
                            des pièces changées suite à la réparation de votre
                            téléphone.
                          </Text>
                        </CardContent>
                      </Card>
                  </div>
                </BoxContent>
              </Box>
          </Column>
          </Columns>
        </Row>
        <Row>
          <Column>
            <Text
              accessibilityLabel="ecofriendly-fix-note"
              typo="has-text-centered"
              className="ecofriendly-fix-note"
              inverted
              level={3}
            >
              *Source : Green Alliance
            </Text>
          </Column>
        </Row>
      </Rows>
    </Section>
  );
}