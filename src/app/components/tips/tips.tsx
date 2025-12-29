import { Box, BoxContent, Card, Section, Title, Text, Button, Rows, Row, Columns, Column, CardImage, CardContent, Link } from "@trilogy-ds/react";

import "./style.css";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

const tipsData = [
  {
    id: 1,
    image: "assets/photos/tip1.jpg",
    title: "Comment prolonger la vie de son smartphone ?",
  },
  {
    id: 2,
    image:"assets/photos/tip2.jpg",
    title: "Comment protéger son smartphone de l’oxydation ?",
  },
  {
    id: 3,
    image: "assets/photos/tip3.jpg",
    title:
      "Les conseils à suivre avant d’envoyer votre téléphone en réparation",
  },
];

export default function Tips() {
    return (
        <Section backgroundColor="MAIN_FADE">
            <Rows>
                <Row>
                    <Title
                    level={2}
                    typo={"has-text-centered"}
                    >
                    Nos astuces pour prendre soin de votre mobile
                    </Title>

                </Row>
                <Row>
                    <Columns align="ALIGNED_CENTER" className="is-fullwidth" scrollable>
                         {tipsData.map((tip, index) => (
                            <Column size={3} className={isMobile&&index!=0?"hide":""}>
                                <Card fullheight>
                                <CardImage src={tip.image} />
                                <CardContent className="tips-card-content">
                                    <Title typo={isMobile?"":"has-text-left"} level={6}>{tip.title}</Title>
                                    <div className={isMobile?"":"link-left"}>
                                    <Link href="https://www.wefix.net/" blank className={isMobile?"":"link-colorr"}  >
                                    {isMobile?"Lire l’article":"Visiter WeFix"}
                                    </Link>
                                    </div>
                                </CardContent>
                                </Card>
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
                                
                            </Column>
                            ))}
                    </Columns>
                </Row>
                
            </Rows>
        </Section>
    );
}
