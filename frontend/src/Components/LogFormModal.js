import { useState } from "react";
import { Button, Form, Input } from "antd";

function LoginForm() {
    const [formArray, setFormArray] = useState([]);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setgender] = useState("");


    const onFinish = (values) => {
        const keys = Object.keys(values);
       
        console.log('My name is ', values[keys[0]]);
        const updatedArray = {fullName: values[keys[0]]}
        setFormArray([...formArray, updatedArray]);
        console.log(formArray);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Form

                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 14 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                            {
                                required: true,
                                message: "A username is required",
                            },
                            { whitespace: true },
                            { min: 3 },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Enter your username" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your email",
                            },
                            { type: "email", message: "Please enter a valid email" },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Type your email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                            },
                            { min: 6 },
                            {
                                validator: (_, value) =>
                                    value && value.includes("A")
                                        ? Promise.resolve()
                                        : Promise.reject("Password does not match criteria."),
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button block type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </header>
        </div>

    )
};

export default LoginForm;
