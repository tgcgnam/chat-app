import { Button, Col, Row, Input, Image, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import styled from "styled-components";
import firebase, { auth, db } from "../../firebase/config";
import { addDocuments } from "../../firebase/services";

const Wrapper = styled.div`
  text-align: center;
  .logo {
    margin: 30px 0;
  }
  .header {
    margin-top: 8rem;
  }
`;

const InputStyled = styled(Input)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: rgba(0, 0, 0, 1);
  display: block;
  font-size: 17px;
  height: 42px;
  margin-bottom: 12px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
  width: 286px;
`;

const ButtonStyled = styled(Button)`
  background: #0a7cff;
  border-radius: 50px;
  color: #fff;
  font-size: 15px;
  padding: 10px 25px;
  height: 100%;
  margin-bottom: 26px;
`;

const WrapperBtn = styled.div`
  .ant-btn {
    font-size: 15px;
    padding: 6px 20px;
    height: 100%;
    width: 286px;
    :first-child {
      margin: 12px;
    }
  }
`;

const Link = styled(Typography.Link)`
  &&& {
    color: #333;
    margin: 0 6px;
    :hover {
      text-decoration: underline;
    }
  }
`;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const ggProvider = new firebase.auth.GoogleAuthProvider();

function Login() {
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  };

  const handleGgLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(ggProvider);

    if (additionalUserInfo?.isNewUser) {
      addDocuments("users", {
        displayname: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
      });
    }
  };

  return (
    <Wrapper>
      <Row justify="center" align="middle">
        <Col span={20}>
          <div className="header">
            <div className="logo">
              <Image
                preview={false}
                src="https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg"
              />
            </div>
            <Title
              level={1}
              style={{ fontWeight: "normal", marginBottom: "40px" }}
            >
              Kết nối với những người bạn yêu quý.
            </Title>

            <InputStyled placeholder="Email hoặc số điện thoại" />
            <InputStyled placeholder="Mật khẩu" />

            <ButtonStyled>Đăng nhập</ButtonStyled>
            <WrapperBtn>
              <Button onClick={handleFbLogin}>Đăng nhập bằng Facebook</Button>
              <Button onClick={handleGgLogin}>Đăng nhập bằng Google</Button>
            </WrapperBtn>
          </div>

          <div style={{ paddingTop: 150 }}>
            <Link>Chưa dùng Facebook?</Link>
            <Link>Quên mật khẩu</Link>
            <Link>Chính sách dữ liệu</Link>
            <Link>Điều khoản</Link>
            <Link>Chính sách Cookie</Link>
            <Link>Meta 2022</Link>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Login;
