import './App.css';
import {Form} from "./components/form"

function App() {

  const onSubmit = (datos) => {
    console.log("datos ", datos)
  }

  return (
    <div className="App">
      <h1>Libreria Artesanal</h1>
      <Form
        onSubmit={onSubmit}
        titulo="Formulario de la Libreria"
      />
    </div>
  );
}

export default App;
