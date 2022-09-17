import React, { ChangeEvent } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

type idForm = {
    id: string;
    setId: React.Dispatch<React.SetStateAction<string>>;
};

type pwForm = {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
};

// 使うときはFormタグで囲む
const InputForm = ({ idform, pwform }: { idform: idForm; pwform: pwForm }) => {
    const changeId = (e: ChangeEvent<HTMLInputElement>) => {
        idform.setId(e.target.value);
    };
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        pwform.setPassword(e.target.value);
    };

    // 入力チェック
    const validateFunc = (val: string) => !(val.length >= 6 && val.length <= 20 && val.match(/^[0-9a-zA-Z-]+$/));

    return (
        <>
            <Form.Group className="mb-3" controlId="formId">
                <FloatingLabel controlId="floatingId" label="ユーザID">
                    <Form.Control
                        type="text"
                        onChange={changeId}
                        placeholder="ユーザID"
                        required
                        isInvalid={validateFunc(idform.id)}
                        autoFocus
                    />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <FloatingLabel controlId="floatingPassword" label="パスワード">
                    <Form.Control
                        type="password"
                        onChange={changePassword}
                        placeholder="パスワード"
                        required
                        isInvalid={validateFunc(pwform.password)}
                    />
                </FloatingLabel>
            </Form.Group>
        </>
    );
};

export default InputForm;
