import { Card, CardContent, Column, Columns, Icon, Row, Rows, Section, Title, Image, Box, Link, Text } from "@trilogy-ds/react";
import "./style.css";


export default function DurabilitySection() {
return (
    <Section backgroundColor="MAIN_FADE">
      <Rows>
        <Row>
          <Title
            typo="has-text-main has-text-weight-bold has-text-centered"
            level={2}
          >
            Ensemble, faisons durer nos smartphones plus longtemps
          </Title>
        </Row>
        <Row>
           
                <Columns align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER"  >
                    <Box className="box">
                        <Columns align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER">
                        <Column size={3}  className="column">
                    <Image 
                    src={"assets/photos/durable.png"}
                    alt="durable-img"
                    >
                    </Image>
                    </Column>
                    <Column size={6} className="column">
                    <Title level={4}>
                      Nos téléphones ont une place particulière dans notre
                      quotidien, en nous accompagnant partout et tout le temps
                    </Title>
                    <Text level={1}>
                      Alors pour s'en séparer le plus tard possible, on
                      lance les <Text markup="span" typo="has-text-weight-bold">Solutions Smartphone Durable</Text> : 4 façons de
                      prolonger la vie de nos mobiles tout en faisant un geste
                      pour la planète.
                    </Text>
                    <Link className="link-colorr">Découvrir nos solutions</Link>
                    </Column>
                        </Columns>
                    </Box>
                </Columns>
        </Row>
      </Rows>
    </Section>
  );
}