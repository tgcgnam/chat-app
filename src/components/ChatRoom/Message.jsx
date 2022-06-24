import { Avatar, Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  margin-bottom: 12px;
`;

export default function Message() {
  return (
    <Wrapper>
      <Text style={{ paddingLeft: "50px", color: "#666666", fontSize: "12px" }}>
        Name
      </Text>
      <Row align="middle">
        <Col>
          <Avatar></Avatar>
        </Col>
        <Col>
          <Text
            style={{
              marginLeft: 12,
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            dayla tin nhan
          </Text>
        </Col>
      </Row>
    </Wrapper>
  );
}
