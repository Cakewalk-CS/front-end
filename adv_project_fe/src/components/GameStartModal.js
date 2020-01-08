import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'

const ModalBasicExample = (props) => (
  <Modal open= {props.success} basic size='small'>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>
        Wanna play?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted onClick={()=> props.setSuccess(false)}>
        <Icon name='remove' /> No
      </Button>
      <Link to='/rooms'>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
      </Link>
    </Modal.Actions>
  </Modal>
)

export default ModalBasicExample