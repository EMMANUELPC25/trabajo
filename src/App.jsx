// Importamos las librerías y componentes necesarios.
import React, { useState, useEffect, useContext, useRef } from 'react';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import "./estilos/App.css" // Importamos un archivo CSS para estilos.

// Creamos un contexto llamado MyContext utilizando React.createContext().
const MyContext = React.createContext();

// Definimos un componente funcional llamado App.
function App() {
  // Definimos estados locales utilizando el hook useState.
  // Cada estado tiene una variable y una función para actualizarla.

  // Estado para almacenar el nombre de la reserva.
  const [name, setName] = useState('');
  
  // Estado para almacenar la fecha de la reserva.
  const [date, setDate] = useState('');
  
  // Estado para almacenar la lista de reservas.
  const [reservations, setReservations] = useState([]);
  
  // Estado para almacenar un mensaje de error.
  const [error, setError] = useState(''); // Variable para el mensaje de error

  // Utilizamos el hook useEffect para efectuar acciones después de que el componente se monte.
  useEffect(() => {
    // Simulamos una carga de datos inicial o configuramos suscripciones a eventos.
    console.log('Componente montado');
  }, []);
  
  // La función handleSubmit se ejecuta cuando se hace clic en el botón "Reservar".
  const handleSubmit = () => {
    // Verificamos si tanto el campo de nombre como el de fecha tienen valores.
    if (name && date) {
      // Si ambos campos están completos, agregamos la reserva a la lista de reservas.
      setReservations([...reservations, { name, date }]);
      // Luego, limpiamos los campos de nombre y fecha.
      setName('');
      setDate('');
      // Y eliminamos cualquier mensaje de error existente.
      setError('');
    } else {
      // Si falta algún dato, establecemos un mensaje de error.
      setError('Error, alguno de los campos no ha sido llenado'); // Mensaje de error en negritas
    }
  };

  // Utilizamos el hook useContext para acceder a un contexto llamado MyContext.
  const sharedData = useContext(MyContext);

  // Utilizamos el hook useRef para obtener una referencia al campo de entrada.
  const inputRef = useRef();
  // Obtenemos el valor actual del campo de entrada (input).
  const inputValue = inputRef.current ? inputRef.current.value : '';

  // Renderizamos la interfaz de la aplicación.
  return (
    <Container>
      <strong><h1>Reservaciones</h1></strong> 
      
      {/* Formulario para ingresar datos de reserva */}
      <Form>
        <Form.Group>
          {/* Etiqueta y campo de entrada para el nombre */}
          <strong><Form.Label>Nombre</Form.Label></strong>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Cuando el usuario escribe en el campo, actualizamos el estado 'name'.
          />
        </Form.Group>
        <Form.Group>
          {/* Etiqueta y campo de entrada para la fecha */}
          <strong><Form.Label>Fecha</Form.Label></strong>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)} // Cuando el usuario selecciona una fecha, actualizamos el estado 'date'.
          />
        </Form.Group>
        {/* Botón para enviar el formulario */}
        <Button variant="primary" onClick={handleSubmit}>
          Reservar
        </Button>
      </Form>
      
      {/* Mostramos el mensaje de error si existe. */}
      {error && <div className="text-danger" dangerouslySetInnerHTML={{ __html: error }}></div>}
      
      {/* Lista de reservas existentes */}
      <ListGroup className="mt-3">
        {reservations.map((reservation, index) => (
          <ListGroup.Item key={index}>
            {reservation.name} - {reservation.date}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  )
}

// Exportamos el componente App para su uso en otras partes de la aplicación.
export default App;



