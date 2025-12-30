import { Button, Card, CardContent, Column, Columns, Icon, Row, Rows, Section, Title, Text, RadiusValues, Image } from "@trilogy-ds/react";

import "./style.css";

const isMobile = window.matchMedia("(max-width: 768px)").matches;


export default function InsuranceSection() {
return (
    <Section
      backgroundColor="MAIN_FADE"
      className="insurance-section"
    >
      <Rows>
        <Row>
          <Title
            accessibilityLabel="hero-title"
            typo="has-text-main has-text-weight-bold has-text-centered"
            className="insurance-title"
            level={2}
          >
            L&apos;assurance, la formule tout confort pour votre mobile
          </Title>
        </Row>
        <Row>
          <Columns align="ALIGNED_CENTER" gap={4}>
            {!isMobile && (
              <Column size={5} align="ALIGNED_END">
                <Image
                  width={`${100}%`}
                  height={374}
                  className="hero-img"
                  radius={RadiusValues.MEDIUM}
                  alt="insurance-img"
                  src={"assets/photos/insurance.jpg"}
                />
              </Column>
            )}
            <Column size={4} mobileSize={12}>
              <Columns multiline={!isMobile} className="is-fullwidth">
                <Column size={12} mobileSize={12}>
                  <Card fullheight className="insurance-card ">
                    <CardContent>
                      <Icon
                        name="tri-sun-euro"
                        size={isMobile ? "medium" : "large"}
                      />

                      <Title level={4}>Aucune dépense</Title>
                      <Text level={1}>à débourser en cas d&apos;incident</Text>
                    </CardContent>
                  </Card>
                </Column>
                <Column size={12} mobileSize={12}>
                  <Card fullheight className="insurance-card">
                    <CardContent>
                      <Icon
                        name="tri-hand-mobile"
                        size={isMobile ? "medium" : "large"}
                      />

                      <Title level={4}>Téléphone assuré</Title>
                      <Text level={1}>
                        en cas de vol, dommages ou oxydation
                      </Text>
                    </CardContent>
                  </Card>
                </Column>
              </Columns>
            </Column>
          </Columns>
        </Row>
        <Row className="insurance-cta">
          <Button className="insurance-cta-btn">
            {" "}
            L&apos;assurance en détail{" "}
          </Button>
        </Row>
      </Rows>
    </Section>
  );
}