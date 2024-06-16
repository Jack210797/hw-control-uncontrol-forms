import { FormEvent, useRef } from 'react'

const UncontrolledForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    console.log('Email: ', emailRef.current?.value)
    console.log('Password: ', passwordRef.current?.value)
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-2">
        <label htmlFor="email-1" className="form-label">
          Email
        </label>
        <input ref={emailRef} type="text" className="form-control" id="email-1" placeholder="Enter your email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password-1" className="form-label">
          Password
        </label>
        <input
          ref={passwordRef}
          type="password"
          className="form-control"
          id="password-1"
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  )
}

export default UncontrolledForm
