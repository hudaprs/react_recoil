import React from "react"
import "./App.css"
import { RecoilRoot } from "recoil"
import { useRecoilState, atom, selector } from "recoil"

const textState = atom({
  key: "textState", // Unique ID (with respect to other atoms/selector)
  default: "" // default value
})

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState)

    return text.length
  }
})

const TextInput = () => {
  const [text, setText] = useRecoilState(textState)

  return (
    <>
      <input
        type='text'
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder='Text Here...'
      />

      <br />

      <p>Echo: {text}</p>
    </>
  )
}

const CharacterCount = () => {
  const count = useRecoilState(charCountState)

  return <p>Character Count: {count}</p>
}

const CharacterCounter = () => {
  return (
    <>
      <TextInput />
      <CharacterCount />
    </>
  )
}

const App = () => {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  )
}

export default App
