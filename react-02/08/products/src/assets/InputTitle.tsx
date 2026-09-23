import { useEffect, useState } from "react";

export function InputTitle() {
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text;
  }, [text])

  return <input placeholder="Введите текст" value={text} onChange={(e) => {setText(e.target.value)}}></input>
}