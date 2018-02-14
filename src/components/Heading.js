import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Row, Col } from 'reactstrap';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="10">
            <h3 class="text-left">Todo List</h3>
          </Col>
          <Col sm="2">
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}><i class="material-icons">menu</i></Button>
          </Col>
        </Row>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
             <Row>
              <Col sm="6">
                <button
                  type="button"
                  className={`btn btn-${
                      this.props.appState.toDate === true
                      ? 'primary'
                      : 'outline-primary'
                    }
                  `}
                  onClick={(e) => this.props.changeSelected(e, 1)}
                  >Current
                </button>
              </Col>
              <Col sm="6">
                <button
                  type="button"
                  className={`btn btn-${
                      this.props.appState.completed === true
                      ? 'primary'
                      : 'outline-primary'
                    }
                  `}
                  onClick={(e) => this.props.changeSelected(e, 2)}
                  >Completed
                </button>
              </Col>
             </Row>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Heading;
