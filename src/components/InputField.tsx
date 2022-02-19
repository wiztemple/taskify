import React, { useRef } from "react";

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void
}

const Inputfield: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input__submit">Go</button>
    </form>
  );
}

export default Inputfield;
