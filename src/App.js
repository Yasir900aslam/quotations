import {
  Button,
  Text,
  Input,
  Select,
  Page,
  Grid,
  User,
  Divider,
  Description,
  Collapse,
  Row,
  Col
} from "@geist-ui/react";
import "./styles.css";
import { useState } from "react";
import { uuidv4 } from "./utils";

function SumInsured() {
  return (
    <>
      <span>description </span>
      <Input type="text" />
      <br />
      <span> value </span>
      <Input type="number" />
      <br />
      <br />
    </>
  );
}

export default function App() {
  const [clientName, setClientName] = useState(" ");
  const [clientAddress, setClientAddress] = useState(" ");
  const [businessClass, setBusinessClass] = useState(" ");
  const [sumInsured, setSumInsured] = useState([<SumInsured />]);

  return (
    <div className="App">
      <Page.Header>
        <Grid.Container>
          <Grid xs={12}>
            <Text>Quotations</Text>
          </Grid>
          <Grid xs={6}>
            <User src="https://unix.bio/assets/avatar.png" name="Anees Ahmad">
              Jubliee Insurance
            </User>
          </Grid>
          <Grid xs={6}>
            <Select value="light" size="medium">
              <Select.Option value="light">Light </Select.Option>
              <Select.Option value="dark">Dark </Select.Option>
            </Select>
          </Grid>
          <Grid xs={12}>
            <Description title="Document Type" content={uuidv4()} />
          </Grid>
        </Grid.Container>
      </Page.Header>
      <Divider />
      <Page.Content>
        <Collapse.Group>
          <Collapse title="Client Details">
            <Row gap={0.8}>
              <Col span={4}>
                <Text>Client Name</Text>
              </Col>
              <Col span={4}>
                <Input
                  size="small"
                  type="text"
                  onChange={(e) => {
                    setClientName(e.target.value);
                  }}
                />
              </Col>
            </Row>

            <Row gap={0.8}>
              <Col span={4}>
                <Text>Client Address</Text>
              </Col>
              <Col span={4}>
                <Input
                  type="text"
                  onChange={(e) => {
                    setClientAddress(e.target.value);
                  }}
                />
              </Col>
            </Row>

            <Row gap={0.8}>
              <Col span={4}>
                <Text>Business Class</Text>
              </Col>
              <Col span={4}>
                <Select
                  placeholder={businessClass}
                  onChange={(e) => {
                    setBusinessClass(e);
                  }}
                >
                  <Select.Option value="new1">new1 </Select.Option>
                </Select>
              </Col>
            </Row>
          </Collapse>
          <Collapse title="Period Of Insurance">
            <label>Issue Date </label>
            <Input type="date" />
            <br />
            <label>Our Expirey Info </label>
            <Input type="date" />
            <br />
            <label> Oucupation Industry </label>
            <Input type="text" />
            <br />
            <label>Risk Location</label>
            <Input type="text" />
          </Collapse>
          <Collapse title="Sum Insured">
            {sumInsured.map((sum) => {
              return sum;
            })}
            <Button
              size="small"
              type="secondary"
              onClick={(e) => {
                e.preventDefault();
                setSumInsured((prevValue) => {
                  return [...prevValue, <SumInsured />];
                });
              }}
            >
              Add
            </Button>
            <Button
              size="small"
              type="success"
              disabled={sumInsured.length === 1}
              onClick={(e) => {
                e.preventDefault();
                setSumInsured((values) => {
                  if (values.length === 1) {
                    return values;
                  } else {
                    return values.slice(0, -1);
                  }
                });
              }}
            >
              Remove
            </Button>
            <br />
            <br />
            <span>Total Sum Insured</span>
          </Collapse>
        </Collapse.Group>
        <span>
          Sum Insured * <input type="number" /> number
        </span>
        <br />
        <span>
          Basic Premium <input type="number" /> number
        </span>
        <br />
        <span>
          Admin Surcharge <input type="number" /> number
        </span>
        <br />
        <span>
          Sales Tax <input type="number" /> number
        </span>
        <br />
        <span>FIF</span>
        <br />
        <span>Stamp</span>
        <br />
        <span>Total</span>
        <br />
        <label>Deductables</label>
        <Input type="text" multiline />
        <br />
        <label>Terms of Service</label>
        <Select placeholder="news">
          <Select.Option value="news">news</Select.Option>
        </Select>
        <br />
      </Page.Content>
      <Page.Footer>
        <Button size="small" type="secondary">
          Print
        </Button>
        <Button size="small" type="success">
          Save{" "}
        </Button>
      </Page.Footer>
    </div>
  );
}
