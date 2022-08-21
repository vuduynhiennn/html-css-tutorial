import './App.css'
import Nav from './components/Nav'

function App() {
  return (
    <div className="grid grid-cols-5">
      <Nav />
      <main className='col-span-4 bg-red-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat quam qui hic laboriosam repudiandae. Sapiente non aut error, nemo eveniet at voluptas. Mollitia excepturi blanditiis voluptates quisquam suscipit consequatur?
      </main>
    </div>
  )
}

export default App
