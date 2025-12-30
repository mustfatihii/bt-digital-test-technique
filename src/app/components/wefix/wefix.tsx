"use client";

import { Column, Columns, Section, Title, Image, Link, Text, Rows, Row, RadiusValues } from "@trilogy-ds/react";

import "./style.css";

export default function WeFix() {
    return (
     <Section backgroundColor="NEUTRAL_FADE">
        <Rows gap={5}>
            <Row>
                <Columns align="ALIGNED_CENTER">
                <Column>
                 <Title 
                    level={3}
                    accessibilityLabel="hero-title"
                    typo={"has-text-centered"}
                    >
                    Le choix d'un partenaire expert pour votre téléphone
                    </Title>
                </Column>      
                </Columns>
            </Row>
            <Row>
                <Columns align="ALIGNED_CENTER" gap={6}>
                    <Column size={4}>
                    <Image
                        alt="wefix-i,g" 
                        src={"/assets/photos/wefix.jpg"} 
                        radius={RadiusValues.MEDIUM}
                        />
                
                    </Column>
                    <Column size={4} align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER">
                        <Title
                            accessibilityLabel="hero-desc-1"
                            level={4}>
                            WeFix, filiale de Fnac Darty, est le leader français de la
                            réparation de smartphones
                        </Title>
                        <Text 
                        accessibilityLabel="hero-desc-2" 
                        level={5}>
                            Quelle que soit la réparation, WeFix a la solution : écran,
                            batterie, WiFi, haut-parleur, écouteurs, appareil photo, connecteur
                            de charge, avec des pièces compatibles.
                        </Text>
                        <Link blank className="link-colorr">
                            Visiter WeFix
                        </Link>
                    </Column>
              </Columns>
            </Row>  
        </Rows>
        
    </Section>
    );
}
