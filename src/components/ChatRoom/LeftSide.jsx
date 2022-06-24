import React from "react";
import { Row, Col } from "antd";
import UserInfo from "./UserInfo";
import MessList from "./MessList";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 12px;
  border-right: 1px solid #dadada;
  height: 100vh;
`;

export default function LeftSide() {
  return (
    <Wrapper>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <MessList />
        </Col>
      </Row>
    </Wrapper>
  );
}
