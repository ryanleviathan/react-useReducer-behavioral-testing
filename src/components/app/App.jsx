import React, { useReducer } from 'react';
import reducer, { initialState } from '../../reducers/colorReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target }) => {
    dispatch({
      type: target.id,
      payload: target.value
    });
  };

  return (
    <>
      <button 
        id="UNDO" 
        disabled={!state.before.length} 
        onClick={handleChange}>
          undo
      </button>
      <button 
        id="REDO" 
        disabled={!state.after.length} 
        onClick={handleChange}>
          redo
      </button>
      <label htmlFor="changeColor">Color Changer</label>
      <input 
        id="INPUT" 
        type="color" 
        value={state.current} 
        onChange={handleChange} />
      <div 
        data-testid="display" 
        style={{ bg: state.current }}>
      </div>
    </>
  );
}

export default App;
