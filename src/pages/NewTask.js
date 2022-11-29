import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';


function NewTask({show, hideModal}) {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    id: 0,
    descricao: "",
    invalidDescription: false,
    status: "todo",
    invalidStatus: false
  })

  const save = (event) => {
    event.preventDefault();
    const isValid = validateFields();
    if(isValid) {
      //salvar
    }
  }
  const validateFields = () => {
    setFields({...fields, invalidDescription: fields.descricao === '', invalidStatus: fields.status === ''})
    return fields.descricao !== '' && fields.status === ''
  }

  const onChangeStatus = (event) => {
    setFields({...fields, status: event.target.value, invalidStatus: event.target.value === '' })
  }

  const onChangeDescription = (event) => {
    setFields({...fields, descricao: event.target.value, invalidDescription: event.target.value === ''  })
  }

  const close = () => {
    setFields({...fields, descricao: '', status: '', invalidDescription: false, invalidStatus: false})
    hideModal();
  }

  return (
    <Modal show={show} onHide={close} >
      <Modal.Header closeButton>
        <Modal.Title>Nova tarefa</Modal.Title>
      </Modal.Header>

      <Form onSubmit={save} >
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicDescricao">
            <Form.Label>Descrição</Form.Label>
            <Form.Control isInvalid={fields.invalidDescription}  as="textarea" onChange={onChangeDescription} value={fields.descricao} placeholder="Insira sua tarefa" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Status</Form.Label>
            <Form.Select onChange={onChangeStatus} isInvalid={fields.invalidStatus} aria-label="Default status" value={fields.status}>
              <option value="">Adicionar a lista</option>
              <option value="todo">To do</option>
              <option value="in_progress">Em progresso</option>
              <option value="done">Feito</option>
            </Form.Select>
          </Form.Group>
          
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={close} variant="light">Cancelar</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}


export default NewTask;