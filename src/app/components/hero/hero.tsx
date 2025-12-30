"use client";

import {
    Columns,
    Column,
    Container,
    Section,
    Text,
    Title, Link, Image, Card, CardImage, CardContent,
    Rows,
    Row,
    RadiusValues
} from '@trilogy-ds/react';

import "./style.css";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

export default function Hero() {
    return (
            <Section backgroundColor="MAIN" >
                <Rows>
                    <Row>
                        <Columns align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER" gap={10}>
                            <Column size={4}>
                                <Title 
                            level={isMobile?2:1} 
                            inverted
                            accessibilityLabel="hero-title"
                             typo={
                                    isMobile
                                        ? "has-text-white has-text-centered"
                                        : "has-text-white has-text-left"
                                    }
                            >
                                Réparation de votre téléphone
                                </Title>
                                <Text 
                                level={isMobile?3:2}  
                                inverted
                                accessibilityLabel="hero-text1"
                                typo={isMobile ? "has-text-centered" : "has-text-left"}
                                >
                                    Un smartphone cassé ou en panne, ça arrive à tout le monde.
                                </Text>
                                <Text 
                                level={isMobile?3:2}  
                                inverted
                                accessibilityLabel="hero-text2"
                                typo={isMobile ? "has-text-centered" : "has-text-left"}
                                >
                                    Heureusement, que vous soyez sous garantie ou non, on a des{" "} 
                                    <Text 
                                    markup="span" 
                                    typo="has-text-weight-bold" 
                                    level={isMobile?3:2}>
                                    solutions de réparation
                                    </Text>
                                    {" "}pour vous !
                                </Text>
                            </Column>
                            <Column size={4}>
                                <Image 
                                alt="brokenMobile" 
                                src={"/assets/photos/brokenMobile.jpg"}
                                radius={RadiusValues.MEDIUM}
                                 />
                            </Column>
                        </Columns>
                    </Row>
                </Rows>
            </Section>
    );
}


/*

<Container>
                    <Columns align='ALIGNED_CENTER' gap={10}>
                        <Column size={4} align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER">
                            
                        </Column>
                        <Column 
                         size={4} 
                         align="ALIGNED_CENTER" 
                         verticalAlign="ALIGNED_CENTER">
                            <Image 
                            alt="brokenMobile" 
                            src={"/assets/photos/brokenMobile.jpg"} />
                        </Column>
                    </Columns>
                </Container>
                */