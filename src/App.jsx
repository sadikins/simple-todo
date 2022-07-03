import { useState } from 'react'

function App() {
  const [activity, setActivity] = useState('');
  const [todos, setTodos] = useState([]);




 const addTodoHandler = (event) => {
  event.preventDefault();

  // Mengambil data lama dengan menambah data baru dengan sprate operator (...)
  setTodos([...todos, activity]);

  // reset || kosongkan form input lagi
  setActivity('')

  }

  return (
    <div className="App">
      <h1>Simple Todo List</h1>
      <form onSubmit={addTodoHandler}>
        <input 
        type="text" 
        placeholder="Nama aktifitas"
        value={activity}
        onChange={ (event) => setActivity(event.target.value)} />
        <button type="submit">Tambah</button>
      </form>

      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>

        } )}
      </ul>
     
    </div>
  )
}

export default App
