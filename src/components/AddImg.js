import { useState } from 'react'
import ListImg from './ListImg'

const AddImg = () => {
  const [list, setList] = useState([])

  const click = () => {
    setList([
      ...list,
      {
        id: crypto.randomUUID(),
        img: `https://picsum.photos/200/300?random=
        ${Math.random() * 10 + 1}.jpg`,
        size: 10,
      },
    ])
  }

  return (
    <div>
      <button onClick={click}>Resim Ekle</button>
      <div className="food-list">
        <ListImg list={list} setList={setList} />
      </div>
    </div>
  )
}
export default AddImg
