
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Breadcrumb, BreadcrumbItem, Column, Columns, Row, Rows, Section, Text } from "@trilogy-ds/react";
import "./style.css";

export default function LegalSection() {
return (
    <Section backgroundColor="WHITE">
      <Rows>
        <Row>
          <Columns multiline className="is-fullwidth" align="ALIGNED_CENTER">
            <Column size={9}>
              <Breadcrumb>
                <BreadcrumbItem active className="parent-color">Accueil</BreadcrumbItem>
                <BreadcrumbItem active className="parent-color">Choisir Bouygues Telecom</BreadcrumbItem>
                <BreadcrumbItem active>Recyclage</BreadcrumbItem>
              </Breadcrumb>
            </Column>
          </Columns>
        </Row>

        <Row>
          <Columns multiline className="is-fullwidth" align="ALIGNED_CENTER">
            <Column size={9}>
              <Accordion id="accordion-1">
                <AccordionItem id="1" className="legal-notice-item">
                  <AccordionHeader className="accordion-bg accordion-responsive">
                    <Text typo={"has-text-right"}  className="legal-text">Mentions légales</Text>
                  </AccordionHeader>
                  <AccordionBody data-id="toto-test-id"></AccordionBody>
                </AccordionItem>
              </Accordion>
            </Column>
          </Columns>
        </Row>
      </Rows>
    </Section>
  );
}