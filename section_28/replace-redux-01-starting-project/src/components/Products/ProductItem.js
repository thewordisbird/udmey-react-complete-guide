import React from 'react';
import { useStore } from '../../hooks-store/store'
import Card from '../UI/Card';
import './ProductItem.css';
// import { ProductsContext } from '../../context/products-context';
const ProductItem = props => {
  // const toggleFav = useContext(ProductsContext).toggleFav;
  const dispatch = useStore(false)[1]

  const toggleFavHandler = () => {
    console.log('[toggleFavoriteHandler]', props.id)
    // toggleFav(props.id)
    dispatch('TOGGLE_FAV', props.id)
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
