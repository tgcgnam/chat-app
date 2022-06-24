import {
  Avatar,
  Col,
  Input,
  Row,
  Typography,
  Menu,
  Dropdown,
  Button,
} from "antd";
import {
  EllipsisOutlined,
  VideoCameraAddOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { auth, db } from "../../firebase/config";
import styled from "styled-components";
import { useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const { Title } = Typography;

const Wrapper = styled.div`
  margin-bottom: 16px;
  .header_user {
    margin-bottom: 16px;
  }
  .ant-typography {
    padding-left: 12px;
    margin: 0;
  }
  .icon {
    font-size: 17px;
    float: right;
    margin-left: 16px;
    padding: 10px 10px;
    background-color: #f5f5f5;
    border-radius: 50%;
    line-height: 0;
    cursor: pointer;
    :hover {
      background-color: #d1d0d0;
    }
  }
  .ant-input {
    border-radius: 50px;
    border: 0;
    padding: 7px;
    background-color: #f5f5f5;
    ::placeholder {
      color: #333;
      padding-left: 12px;
    }
  }
`;

export default function UserInfo() {
  const {
    user: { displayname, photoURL },
  } = useContext(AuthContext);
console.log(displayname);
  const menu = (
    <Menu>
      <Button onClick={() => auth.signOut()} type="text">
        Log Out
      </Button>
    </Menu>
  );

  return (
    <Wrapper>
      <Row align="middle" className="header_user">
        <Col span={12} className="header_user_left">
          <Row align="middle">
            <Avatar size={"large"} src={photoURL}>
              {photoURL ? "" : displayname?.chartAt(0).toUpperCase()}
            </Avatar>
            <Title level={3}>Chat</Title>
          </Row>
        </Col>
        <Col span={12} className="header_user_right">
          <span className="icon">
            <FormOutlined />
          </span>
          <span className="icon">
            <VideoCameraAddOutlined />
          </span>
          <Dropdown overlay={menu} trigger={["click"]}>
            <span
              className="icon ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <EllipsisOutlined />
            </span>
          </Dropdown>
        </Col>
      </Row>
      <Input placeholder="Tìm kiếm trên Messenger" />
    </Wrapper>
  );
}
