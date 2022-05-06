import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="background-image">
      <div className="wrap-login100">
        <div className="logo-contain">
          <center>
            <img src="/images/fifi.png" height="100px" />
            <br />
            <br />
            <h1 className="welcome">សូមស្វាគមន៍</h1>
          </center>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="phonenumber"
            rules={[{ required: true, message: "បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="លេខទូរស័ព្ទ"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "បញ្ចូលពាក្យសម្ងាត់របស់អ្នក!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="ពាក្យសម្ងាត់"
            />
          </Form.Item>

          <Button htmlType="submit" className="login-form-button">
            រួចរាល់
          </Button>

          <br />
          <br />
          <br />
          <center>
            <h3>អ្នកអាចប្រើប្រាស់អុីធឺនែតនេះចំនួន ៣ នាទីទៀត</h3>
          </center>

          <Button htmlType="submit" className="login-form-button">
            ប្រើប្រាស់បាន
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
