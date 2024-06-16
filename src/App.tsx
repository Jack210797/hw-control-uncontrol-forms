import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
function App() {
  return (
    <div className="container d-flex flex-column gap-5">
      <div className="mt-5 d-flex align-items-center justify-content-center flex-column">
        <h1>Controled form</h1>
        <ControlledForm />
      </div>

      <div className="mt-5 d-flex align-items-center justify-content-center flex-column">
        <h1>Uncontroled form</h1>
        <UncontrolledForm />
      </div>
    </div>
  )
}

export default App
