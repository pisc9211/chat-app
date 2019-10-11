import styled from "styled-components";
import { Link } from 'react-router-dom'

export const FormContainer = styled.div`
  height: 100vh;
  background: #11262C;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  width: 20%;
  text-align: center;

  @media (max-width: 320px) {
    width: 90%
  }

  @media (min-width: 321px) and (max-width: 768px) {
    width: 60%
  }
`

export const Title = styled.h1`
  display: inline-block;
  margin-bottom: 2rem;
  color: #fff;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 400;
  border-bottom: 2px solid #fff;
`

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
`

export const SignInButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  background: #fff;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
`