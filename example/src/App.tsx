import React from 'react'
import "semantic-ui-css/semantic.min.css";

import { Checkbox, Dropdown, Form, Input, Radio } from '@perlogv/formik-semantic-react'

const App = () => {
  return (
    <Form>
      <Input />
      <Checkbox />
      <Radio />
      <Dropdown options={[]} />
    </Form>
  )
}

export default App
