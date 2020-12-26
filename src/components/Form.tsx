import React from 'react'
import { Form as SemanticForm } from 'semantic-ui-react'

const Form = ({ children, ...props }: any) => {
  return <SemanticForm {...props}>{children}</SemanticForm>
}

export default Form
