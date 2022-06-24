import { Input, Button, Row, Col } from "antd";
import {
  PlusCircleFilled,
  FileImageFilled,
  SmileFilled,
  SendOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import Message from "./Message";

const Wrapper = styled.div`
  padding: 12px;
  /* height: calc(100% -65px); */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 100%;
  overflow-y: auto;
`;
const MessageList = styled.div`
padding: 12px;
  padding-bottom: 30px;
  max-height: 100%;
  overflow-y: auto;
`;

const InputList = styled.div`
  border-top: 1px solid #f5f5f5;
  margin-bottom: 30px;
  padding: 12px 0;
  .icon,
  .icon_send {
    font-size: 20px;
    margin-right: 12px;
    padding: 10px 10px;
    color: rgb(64, 159, 255);
    border-radius: 50%;
    line-height: 0;
    cursor: pointer;
    :hover {
      background-color: #f5f5f5;
    }
  }
  .icon_send {
  }
  .ant-input {
    height: 36px;
    border-radius: 20px;
  }
`;

export default function FooterRight() {
  return (
    <>
      <MessageList>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </MessageList>
      <InputList>
        <Row align="middle">
          <Col span={3}>
            <span className="icon">
              <PlusCircleFilled />
            </span>
            <span className="icon">
              <SmileFilled />
            </span>
            <span className="icon">
              <FileImageFilled />
            </span>
          </Col>
          <Col span={20}>
            <Input />
          </Col>
          <Col span={1}>
            <span className="icon_send">
              <SendOutlined />
            </span>
          </Col>
        </Row>
      </InputList>
    </>
  );
}
