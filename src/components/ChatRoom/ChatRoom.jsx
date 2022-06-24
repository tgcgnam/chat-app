import React from "react";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";
import { Row, Col } from "antd";



export default function ChatRoom() {
  return (
   <div>
      <Row>
        <Col span={5}>
          <LeftSide />
        </Col>
        <Col span={19}>
          <RightSide />
        </Col>
      </Row>
   </div>
  );
}
