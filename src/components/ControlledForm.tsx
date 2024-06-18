import { FormEvent } from 'react'
import useInputState from '../hooks/useInputState'

const ControlledForm = () => {
  const userEmail = useInputState('')
  const userPassword = useInputState('')

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log({
      email: userEmail.value,
      password: userPassword.value
    })
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="text" className="form-control" id="email" placeholder="Enter your email" {...userEmail} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          {...userPassword}
        />
      </div>

      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  )
}

export default ControlledForm
