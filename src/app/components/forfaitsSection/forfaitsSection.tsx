import { Button, Card, CardContent, Column, Columns, Icon, Row, Rows, Section, Title, Text } from "@trilogy-ds/react";
import "./style.css";

export default function ForfaitsSection() {
return (
    <Section backgroundColor="MAIN_FADE" >
        <Rows>
            <Row>
                <Title
                    typo="has-text-main has-text-weight-bold has-text-centered"
                    level={2}
                >
                    Nos forfaits, pour vous
                </Title>
            </Row>
            <Row>
                <Columns align="ALIGNED_CENTER"  gap={4}>
                    <Column size={4} >
                        <Card fullheight>
                                <CardContent >
                                    <div>
                                        <Icon
                                    name="tri-sim-card"
                                    size={"medium"}
                                    />
                                    <Icon
                                    name="tri-mobile"
                                    size={"medium"}
                                    />
                                    </div>
                    
                                    <Title level={4}>
                                        Découvrir nos forfaits<br/> Bouygues Telecom
                                    </Title>
                                    <Text level={1}>
                                        Bénéficiez d'un réseau mobile de qualité,
                                        d'avantages et de services exclusifs et d'un
                                        nouveau smartphone.
                                    </Text>
                                   <Button variant="CONVERSION"> En profiter </Button>
                                </CardContent>
                        </Card>
                    </Column>
                    <Column size={4}>
                    <Card fullheight>
                                <CardContent >
                                        <Icon
                                    name="tri-sim-card"
                                    size={"medium"}
                                    />
                                    <Title level={4}>
                                        Découvrir nos forfaits<br/> B&YOU sans engagement
                                    </Title>
                                    <Text level={1}>
                                        Profitez de la qualité de notre réseau avec nos forfaits B&YOU sans engagement.
                                    </Text>
                                   <Button variant="CONVERSION"> En profiter </Button>
                                </CardContent>
                        </Card>
                    </Column>
                </Columns>
            </Row>
        </Rows>
    </Section>
  );
}