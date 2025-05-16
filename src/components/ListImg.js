import { useState } from 'react'

const ListImg = ({ list, setList }) => {
  function click(id) {
    setList(
      list.map((item) => {
        if (item.id === id) {
          item.size = item.size + 2
        }
        return item
      })
    )
  }
  return (
    <>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <img
              key={item.id}
              className="food-background"
              src={item.img}
              onClick={() => click(item.id)}
            />
            <div
              style={{
                fontSize: `${item.size}px`,
                textAlign: 'right',
              }}
            >
              👍
            </div>
          </div>
        )
      })}
    </>
  )
}
export default ListImg
