import React, {useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal'
import './Search.css';

import useHttp from '../../hooks/http'

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('')
  const inputRef = useRef()
  const { isLoading, error, data, sendRequest, clear} = useHttp();

  useEffect(() => {
    console.log('[enteredFilter]', enteredFilter)

    const delayTimer = setTimeout(()=>{
      if(enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`
        
        sendRequest(
          'https://react-hooks-update-1f633-default-rtdb.firebaseio.com/ingredients.json' + query,
          'GET'
        )            
      }
    },500)

    // Use useEffect return for cleanup
    return () => {
      clearTimeout(delayTimer)
    };
  }, [enteredFilter, sendRequest, inputRef ])

  useEffect(() => {
    // Handle Response 
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for( const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        })
      }
      console.log('loadedIngredients', loadedIngredients)
      onLoadIngredients(loadedIngredients)
    }
  }, [data, isLoading, error, onLoadIngredients])

  return (
    <section className="search">
      { error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>...Loading</span>}
          <input type="text" 
          ref={inputRef}
          value={enteredFilter}
          onChange={event => setEnteredFilter(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
