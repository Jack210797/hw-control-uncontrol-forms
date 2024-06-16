import { ChangeEvent, useState } from 'react'

function useInputState(initialValue: string) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  }
}

export default useInputState
