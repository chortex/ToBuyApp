import React from 'react';
import TobuyList from './tobuy/TobuyList'
import Context from './context'
import AddTobuy from './tobuy/AddTobuy'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  // const [tobuys, setTobuys] = React.useState([])
  const [tobuys, setTobuys] = useLocalStorage('toBuyList', []);

  function ToggleTobuy(id) {
    setTobuys(tobuys.map(tobuy => {
      if (tobuy.id === id) {
        tobuy.completed = !tobuy.completed
      }
      return tobuy
    })
    )
  }

  function removeTobuy(id) {
    setTobuys(tobuys.filter(tobuy => tobuy.id !== id))
  }

  function addTobuy(title) {
    setTobuys(
      tobuys.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTobuy }}>
      <div className='wrapper jumbotron'>
        <h2 className='text-primary'><i className="fa fa-shopping-cart"></i> Your shopping card</h2>
        <AddTobuy onCreate={addTobuy} />

        {tobuys.length ? (
          < TobuyList tobuys={tobuys} onToggle={ToggleTobuy} />
          ) : (
            <p className='text-secondary' style={{textAlign: "center", fontSize: "20px"}}>Your shopping card is empty!</p>
          )
        }
      </div>
      <div className='footer bg-primary d-flex justify-content-center'>
        <h4 className='text-white'>Developed by <a href='https://github.com/chortex' rel="noopener noreferrer" target='_blank' >Roman Basarab</a></h4>
      </div>
    </Context.Provider>
  )
}

export default App;