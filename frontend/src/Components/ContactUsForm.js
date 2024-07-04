import { useState } from "react";
import { Button, Form, Input, message } from "antd";

function ContactUs() {
    const [formArray, setFormArray] = useState([]);
    const [error, setError] = useState(null);
    const [contactForm] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';


    const onFinish = async (values) => {
        const keys = Object.keys(values);
        const updatedArray = { name: values[keys[0]], email: values[keys[1]], message: values[keys[2]] }
        const name = values[keys[0]]
        const email = values[keys[1]]
        const message = values[keys[2]]
        const workout = { name, email, message }
        console.log(name, email, message);
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json

        if (!response.ok) {
            setError(json.error)
        }
        if(response.ok){
            setError(null);
            console.log('new workout added', json)
        }
        setFormArray([...formArray, updatedArray]);
        console.log(formArray);
        messageApi.open({
            key,
            type: 'loading',
            content: 'sending...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'message sent successfully!',
                duration: 2,
            });
        }, 2000);
        contactForm.resetFields();
    }

    // const openMessage = () => {
    //     messageApi.open({
    //         key,
    //         type: 'loading',
    //         content: 'Loading...',
    //     });
    //     setTimeout(() => {
    //         messageApi.open({
    //             key,
    //             type: 'success',
    //             content: 'Loaded!',
    //             duration: 2,
    //         });
    //     }, 1000);
    // };

    return (
        <div className="App">
            {contextHolder}
            <header className="App-header">
                <Form
                    form={contactForm}
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 14 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your name",
                            },
                            { whitespace: true },
                            { min: 3 },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="type your name here" />
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
                        <Input placeholder="e.g: someone@example.com" />
                    </Form.Item>

                    <Form.Item
                        name="message"
                        label="Message"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your message",
                            },
                            { whitespace: true },
                            { min: 3 },
                        ]}
                        hasFeedback
                    >
                        <Input.TextArea showCount maxLength={100} placeholder="type your message here" />

                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button block type="primary" htmlType="submit">
                            Send
                        </Button>
                    </Form.Item>
                </Form>
            </header>
        </div>

    )
};

export default ContactUs;
