import { ChangeEvent, useState } from 'react'

export default function useInputState(initialValue: string) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  }
}
