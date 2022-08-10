import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export function FormBook() {
  const [validated, setValidated] = useState(false);
  let [estados, setEstados] = useState([])
  let [cidades, setCidades] = useState([])

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const fetchEstados = () => {
    //por padrão o mètodo fetch é o GET
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')

      .then(Response => Response.json())
      .then(data => {
        // console.log('estados', data)
        setEstados(data);
      })
  }

  const fetchCidades = sigla => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`)
      .then(Response => Response.json())
      .then(data => {
        setCidades(data.map(city => <option>{city.nome}</option>))
      })
  }


  useEffect(() => {
    fetchEstados();
    console.log('useEffect');
  }, [])





  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {console.log('return')}
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="titulo"
          // defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>autor</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="autor"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className="mb-3">

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Estado</Form.Label>
          <Form.Select aria-label="Default select example" onChange={e => {
            let sigla = e.target.value;
            fetchCidades(sigla)

          }}>
            <option>Selecione..</option>
            {estados.map(estado => <option value={estado.sigla}>{estado.nome}</option>)}

          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>cidade</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Selecione..</option>
            {cidades}
          </Form.Select>
        </Form.Group>

      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}