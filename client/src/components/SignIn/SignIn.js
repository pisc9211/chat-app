import React from "react"

import { FormContainer, Form, Title, Input, SignInButton } from './SignIn.styled'

const SignIn = () => {

  return (
    <FormContainer>
      <Form>
        <Title>Sign In</Title>
        <Input placeholder="Enter Username" />
        <Input placeholder="Enter Room Name" />
        <SignInButton>Sign In</SignInButton>
      </Form>
    </FormContainer>
  )
}

export default SignIn
