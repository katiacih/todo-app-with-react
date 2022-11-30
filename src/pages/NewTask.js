import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { newTask } from '../store/tasksSlice';


function NewTask({show, hideModal}) {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    id: 0,
    description: "",
    invalidDescription: false,
    status: "todo",
    invalidStatus: false
  })
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [isSaveSuccess, setIsSaveSuccess] = useState(true)

  const save = (event) => {
    event.preventDefault();
    const isValid = validateFields();
    
    if(isValid) {
      dispatch(newTask(fields))
      close();
      setIsShowAlert(true);
      setIsSaveSuccess(true);
    }
  }
  const validateFields = () => {
    setFields({...fields, invalidDescription: fields.description === '', invalidStatus: fields.status === ''})
    return fields.description !== '' && fields.status !== ''
  }

  const onChangeStatus = (event) => {
    setFields({...fields, status: event.target.value, invalidStatus: event.target.value === '' })
  }

  const onChangeDescription = (event) => {
    setFields({...fields, description: event.target.value, invalidDescription: event.target.value === ''  })
  }

  const close = () => {
    setFields({...fields, description: '', status: '', invalidDescription: false, invalidStatus: false})
    setIsSaveSuccess(false);
    setIsShowAlert(false);
    hideModal();
  }

  return (
    <>
      {
        isShowAlert && isSaveSuccess && <Alert 
        key="success" variant="success" 
        onClose={() => setIsShowAlert(false)} dismissible>
        Task adicionada com sucesso!
      </Alert> 
      }
      <Modal show={show} onHide={close} >
        <Modal.Header closeButton>
          <Modal.Title>Nova tarefa</Modal.Title>
        </Modal.Header>

        <Form onSubmit={save} >
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicdescription">
              <Form.Label>Descrição</Form.Label>
              <Form.Control isInvalid={fields.invalidDescription}  as="textarea" onChange={onChangeDescription} value={fields.description} placeholder="Insira sua tarefa" />
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
      
    </>
  )
}


export default NewTask;