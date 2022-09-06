import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form, Popover, OverlayTrigger } from "react-bootstrap";

const SummaryForm =()=>{
const [tcChecked, setTcChecked] = useState(false);

const popover = (
    <Popover id="popover-basic">
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body>
      no ice cream will actually be delivered
            </Popover.Body>
    </Popover>
  );
const checkboxLabel = (
    <span>
        I agree to
        <OverlayTrigger  placement="right" overlay={popover}>
         <span style={{color:"blue"}} > Terms and Conditions</span>
  </OverlayTrigger>
    </span>
)

  
  const Example = () => (
    <OverlayTrigger  placement="right" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  );
    return(
        <Form>
            <Form.Group controlId="terms and conditions" > 
                <Form.Check
                type ="checkbox"
                checked={tcChecked}
                onChange={(e)=>setTcChecked(e.target.checked)}
                label={checkboxLabel}
                />
            </Form.Group>
            <Button variant= "primary" type="submit" disabled={!tcChecked}>
                Confirm order
            </Button>
        </Form>
    )
}

export default SummaryForm