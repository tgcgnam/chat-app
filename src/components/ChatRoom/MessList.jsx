import { Row, Col, Avatar } from "antd";
import Text from "antd/lib/typography/Text";
import { AppContext } from "../Context/AppProvider";
import { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 12px;
  border-radius: 20px;
  margin-bottom: 12px;
`;

export default function MessList() {
  const { list } = useContext(AppContext);
  console.log(list);
  return (
    <div>

      <Wrapper>
        <Row align="middle">
          <Col span={4}>
            <Avatar size={50}></Avatar>
          </Col>
          <Col span={20}>
            <Text className="title"></Text>
            <br />
            <Text className="mess"></Text>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
}
