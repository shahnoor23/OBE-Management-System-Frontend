import React from "react";
import {Card,Button} from 'react-bootstrap'

class BodyComponent2 extends React.Component {
  state = {
    index:null
  };
  
  handleSelect = (selectedIndex, e) => {
    this.setState({
        index:selectedIndex
    });
  };

  render() {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>WHAT IS OBE?</Card.Header>
                <Card.Body>
                    <h3>Outcome-based education or outcomes-based education (OBE), also known as standards-based education, is an educational theory that bases each part of an educational system around goals (outcomes).</h3>
                    <Card.Title style={{fontWeight:'100'}}> By the end of the educational experience, each student should have achieved the goal. There is no single specified style of teaching or assessment in OBE; instead, classes, opportunities, and assessments should all help students achieve the specified outcomes.[1] The role of the faculty adapts into instructor, trainer, facilitator, and/or mentor based on the outcomes targeted.</Card.Title>
                        <Card.Text>
                        OUTCOME BASED EDUCATION
Outcome-based education (OBE) is an educational theory that bases each part of an educational system around goals (outcomes). By the end of the educational experience, each student should have achieved the goal.
The International Engineering Alliance (IEA) is a global not-for-profit organization, which comprises members from 36 jurisdictions within 27 countries, across seven international agreements. These international agreements govern the recognition of engineering educational qualifications and professional competence. In 1989, the Washington Accord was signed and OBE system was adopted by the full signatory of these accord.
Pakistan has been declared as "Full Signatory" of the Washington Accord. A highest prestigious international forum of International Engineering Alliance, in its General Assembly Meeting held in USA on 21st June 2017. PEC was representing the country to attain full signatory status of WA since 2011. Washington Accord is a highly rigorous global standard on engineering education and accreditation system which grants substantial equivalence of degrees; means international recognition to equate at par with top leading signatory countries of the world. To give benefit to across border mobility of engineers.
                        </Card.Text>
                    <Button variant="primary">Lean more about OBE</Button>
                </Card.Body>
            </Card>
        </React.Fragment>
        );
  }
}

export default BodyComponent2;
