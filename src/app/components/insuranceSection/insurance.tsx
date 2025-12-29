import { Button, Card, CardContent, Column, Columns, Icon, Row, Rows, Section, Title, Text, RadiusValues, Image } from "@trilogy-ds/react";

import "./style.css";

const isMobile = window.matchMedia("(max-width: 768px)").matches;


export default function InsuranceSection() {
return (
    <Section
      backgroundColor="MAIN_FADE"
    >
      <Rows>
        <Row>
          <Title
            typo="has-text-main has-text-weight-bold has-text-centered"
            level={2}
          >
            L'assurance, la formule tout confort pour votre mobile
          </Title>
        </Row>
        <Row>
          <Columns align="ALIGNED_CENTER" gap={4}>
          {
            !isMobile && <Column size={5}>
                    <Image
                    radius={RadiusValues.MEDIUM}
                    alt="insurance-img"
                    src={"assets/photos/insurance.jpg"}
                    />
                </Column>

          }
                <Column size={4}>
                    <div>
                        <Card>
                        <CardContent>
                        <Icon
                            name="tri-sun-euro"
                            size={"medium"}
                        />

                        <Title level={4}>Aucune dépense</Title>
                        <Text level={1}>à débourser en cas d&apos;incident</Text>
                        </CardContent>
                    </Card>
                        <Card>
                        <CardContent>
                        <Icon
                            name="tri-hand-mobile"
                            size={"medium"}
                        />

                        <Title level={4}>Téléphone assuré</Title>
                        <Text level={1}>
                            en cas de vol, dommages ou oxydation
                        </Text>
                        </CardContent>
                    </Card>
                      </div>
                </Column>
          </Columns>
        </Row>
        <Row className="insurance-btn-center">
          <Button className="insurance-btn">
            {" "}L'assurance en détail{" "}
          </Button>
        </Row>
      </Rows>
    </Section>
  );
}