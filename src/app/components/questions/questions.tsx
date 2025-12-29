import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Column, Columns, Row, Rows, Section, Title, Text } from "@trilogy-ds/react";

const questions = [
    {
      id: "1",
      question: "Comment faire réparer son téléphone chez Bouygues Telecom ?"
    },
    {
      id: "2",
      question: "Quels types de réparations propose le service ?"
    },
    {
      id: "3",
      question: "Combien de temps prendra la réparation de mon téléphone ?"
    },
    {
      id: "4",
      question: "La réparation est-elle garantie ?"
    },
    {
      id: "5",
      question:
        "Quels sont mes avantages si je fais réparer mon téléphone chez Bouygues Telecom ?"
    },
    {
      id: "6",
      question: "Quelles marques de téléphones sont réparables ?"
    },
    {
      id: "7",
      question:
        "Comment faire réparer mon téléphone tout en préservant la garantie ?"
    },
  ];

export default function QuestionsSection() {
return (
     <Section  backgroundColor="WHITE">
      <Rows>
        <Row>
          <Columns align="ALIGNED_CENTER" gap={10}>
            <Column size={4}>
              <Title
                typo={"has-text-main has-text-weight-bold has-text-left"}
                level={2}
              >
                Toutes vos questions sur la réparation de téléphone
              </Title>
            </Column>
            <Column size={5}>
              <Accordion>
                {questions.map((item) => (
                  <AccordionItem id={item.id} key={item.id}>
                    <AccordionHeader>
                      <Text>{item.question}</Text>
                    </AccordionHeader>
                    <AccordionBody ></AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </Column>
          </Columns>
        </Row>
      </Rows>
    </Section>
  );
}