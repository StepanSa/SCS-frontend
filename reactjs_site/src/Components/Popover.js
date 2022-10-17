import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Container, Row, Col, Card } from 'react-bootstrap';

function PopoverPositionedExample() {
  return (
    <>
      <Container style={{ paddingTop: '18rem', paddingBottom: '2rem', paddingLeft: '31.5rem' }}>
        <OverlayTrigger 
          trigger="click"
          key="left"
          placement="left"
          overlay={
            <Popover id={`popover-positioned-left`}>
              <Popover.Header as="h3">{`Popover left`}</Popover.Header>
              <Popover.Body>
                <strong>STEP 1</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button className='me-5' variant="danger">Find</Button>
        </OverlayTrigger>

        <OverlayTrigger
          trigger="click"
          key="top"
          placement="top"
          overlay={
            <Popover id={`popover-positioned`}>
              <Popover.Header as="h3">{`Popover top`}</Popover.Header>
              <Popover.Body>
                <strong>STEP 1</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button className='me-5' variant="danger">Chat</Button>
        </OverlayTrigger>

        <OverlayTrigger
          trigger="click"
          key="right"
          placement="right"
          overlay={
            <Popover id={`popover-positioned`}>
              <Popover.Header as="h3">{`Popover right`}</Popover.Header>
              <Popover.Body>
                <strong>STEP 1</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="danger">Play</Button>
        </OverlayTrigger>
      </Container>
    </>
  );
}

export default PopoverPositionedExample;