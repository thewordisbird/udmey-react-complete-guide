import React, {useState} from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: () => {}
})

export default props => {
  const [products, setProducts] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ] )

  const toggleFavorite = productId => {
    setProducts(prevProducts => {
      console.log('[toggleFavorite, productId]', productId)
      const prodIndex = prevProducts.findIndex(
        p => p.id === productId
      );
      const newFavStatus = !prevProducts[prodIndex].isFavorite;
      const updatedProducts = [...prevProducts];
      updatedProducts[prodIndex] = {
        ...prevProducts[prodIndex],
        isFavorite: newFavStatus
      };
      return updatedProducts
    })
  }

  return (
    <ProductsContext.Provider value={{products: products, toggleFav: toggleFavorite}}>
      {props.children}
    </ProductsContext.Provider>
  )
}