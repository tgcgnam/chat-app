import { Row, Col, Avatar } from "antd";
import {
  PhoneFilled,
  VideoCameraFilled,
  EllipsisOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";

const Wrapper = styled.div`
  padding: 12px;
  border-bottom: 1px solid #dadada;
  height: 65px;
  .header_right {
    margin-bottom: 16px;
  }
  .ant-typography {
    padding-left: 12px;
    margin: 0;
  }
  .icon {
    :last-child {
      transform: rotateY(180deg);
    }
    font-size: 20px;
    float: right;
    margin-left: 16px;
    padding: 10px 10px;
    color: rgb(140, 179, 255);
    border-radius: 50%;
    line-height: 0;
    cursor: pointer;
    :hover {
      background-color: #f5f5f5;
    }
  }
`;

export default function HeaderRight() {
  return (
    <Wrapper>
      <Row align="middle" className="header_right">
        <Col span={12}>
          <Row align="middle">
            <Avatar size={"large"}></Avatar>
            <Title level={3}>Chat</Title>
          </Row>
        </Col>
        <Col span={12}>
          <span className="icon">
            <EllipsisOutlined />
          </span>
          <span className="icon">
            <VideoCameraFilled />
          </span>
          <span className="icon">
            <PhoneFilled />
          </span>
        </Col>
      </Row>
    </Wrapper>
  );
}
