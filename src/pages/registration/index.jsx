import React, { useState } from "react";
import { Typo } from "../../components/ui/Typo"
import { Container } from '../../components/ui/Container'
import { Form } from "../../components/ui/Form";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState({name: '', surname: '', email: '', password: ''})
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()

        try{
            const users = JSON.parse(localStorage.getItem('users'))
            const userId = Date.now()
            const newUser = { id: userId, ...formValues}

            if (!users){
                localStorage.setItem('users', JSON.stringify([newUser]))
                navigate('/auth')
                return
            }

            if (users.find((user) => user.email === formValues.email)){
                alert('Пользователь с таким email существует')
                return
            }

            users.push(newUser)

            localStorage.setItem('users', JSON.stringify(users))
            navigate('/auth')

        } catch {
            console.log(e)
        }
    }

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value})
    }

    const disabled = !formValues.name || !formValues.email || !formValues.password

    return (<Container>
        <Typo>Страница регистрации</Typo>
        <Form onSubmit={onSubmit}>
            <Field>
                <Input
                    type="text"
                    name="name"
                    value={formValues.name}
                    placeholder="Имя"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Field>
                <Input
                    type="text"
                    name="surname"
                    value={formValues.surname}
                    placeholder="Фамилия"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Field>
                <Input
                    type="email"
                    name="email"
                    value={formValues.email}
                    placeholder="email"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Field>
                <Input
                    type="password"
                    name="password"
                    value={formValues.password}
                    placeholder="Пароль"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Button type="submit" disabled={disabled}>Регистрация</Button>
        </Form>
    </Container>
    )
}