import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function NewTask(show, hideModal) {
  const [fields, setFields] = useState({
    id: 0,
    descricao: "",
    status: "todo"
  })
  const [validateFields, setValidateFields] = useState(false)

  const save = (event) => {
    event.preventDefault()
    if(fields.descricao === '' || fields.status === '') {
      setValidateFields(true)
    }


  }

  const onChangeStatus = (event) => {
    setFields({...fields, status: event.target.value})
  }

  const onChangeDescription = (event) => {
    setFields({...fields, descricao: event.target.value})
  }

  return (
    // <Modal show={show} onHide={handleClose}>
    <Modal show={show} onHide={hideModal} >
      <Modal.Header closeButton>
        <Modal.Title>Nova tarefa</Modal.Title>
      </Modal.Header>

      <Form onSubmit={save} isValid={validateFields}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" onChange={onChangeDescription} value={fields.descricao} placeholder="Insira sua tarefa" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Status</Form.Label>
            <Form.Select onChange={onChangeStatus} aria-label="Default status" value={fields.status}>
              <option>Adicionar a lista</option>
              <option value="todo">To do</option>
              <option value="in_progress">Em progresso</option>
              <option value="done">Feito</option>
            </Form.Select>
          </Form.Group>
          
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={hideModal} variant="light">Cancelar</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}


export default NewTask;