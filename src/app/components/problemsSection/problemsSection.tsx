import { Card, CardContent, Column, Columns, Icon, Row, Rows, Section, Title, Text, Link} from "@trilogy-ds/react";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

import "./style.css";

export default function ProblemsSection() {
return (
    <Section backgroundColor="INFO">
        <Rows>
            <Row>
                <Title
                    typo="has-text-weight-bold has-text-centered"
                    level={2}
                    >
                    Quel que soit le problème, nous avons la solution
                </Title>
            </Row>
            <Row>
                <Columns align="ALIGNED_CENTER">
                <Column  size={5} >
                    <Card fullheight >
                    <CardContent >
                        <Icon
                        name="tri-mobile-broken"
                        size={"large"}
                        />
                        <Title level={4}>
                        Mon téléphone n'est plus sous garantie
                        </Title>
                        <Text level={1} typo={isMobile?"has-text-centered":"has-text-left"}>
                        Si le téléphone que nous vous avons vendu n'est plus
                        garanti et n'est pas assuré ou si vous n'avez pas
                        acheté votre téléphone chez nous, vous pouvez bénéficier
                        d'une{" "}
                        <Text markup="span" typo="has-text-weight-bold" level={1}>
                            réparation en boutique{" "}
                        </Text>
                        , et{" "}
                        <Text markup="span" typo="has-text-weight-bold" level={1}>
                            à prix réduit{" "}
                        </Text>{" "}
                        si vous détenez un forfait Bouygues Telecom.
                        </Text>
                        <div className="link-container">
                            {
                            !isMobile && <Link blank className="link-colorr" >
                        {" "}
                        Trouver ma boutique{" "}
                        </Link>
                        }  
                        </div>
                    </CardContent>
                    </Card>
                </Column>
                <Column size={5} >
                    <Card fullheight>
                    <CardContent>
                        <Icon
                        name="tri-hand-mobile"
                        size={"large"}
                        />
                        <Title level={4}>Mon téléphone est sous garantie</Title>
                        <Text level={1} typo={isMobile?"has-text-centered":"has-text-left"}>
                        <Link>Tous nos téléphones</Link> sont  <Text markup="span" typo="has-text-weight-bold" level={1}>
                        garantis 2 ans
                        </Text> . Si vos
                        téléphone tombe en panne pendant ce délais et qu'il
                        s'agit d'un défaut couvert par les garanties légales
                        (par exemple, un défaut de fabrication), <Text markup="span" typo="has-text-weight-bold" level={1}>
                        sa réparation est
                        prise en charge gratuitement
                        </Text> par Bouygues Telecom.
                        </Text>
                    </CardContent>
                    </Card>
                </Column>
                </Columns> 
            </Row>
      </Rows>
    </Section>
  );
}