import { useState } from 'react'
import ListImg from './ListImg'

const AddImg = () => {
  const [list, setList] = useState([])

  const click = () => {
    setList([
      ...list,
      {
        id: crypto.randomUUID(),
        img: `https://picsum.photos/id/${Math.floor(
          Math.random() * 1 + 1
        )}/200/300.jpg`,
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
