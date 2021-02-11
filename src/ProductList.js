import React from 'react';

class ProductList extends React.Component{

    
     renderProductList = () =>{
          let allProductsListItems=this.props.plist.map(product => {
              return <li key={product.pid}>{product.pid} {product.name} {product.description}</li>
          })

          console.log(allProductsListItems);

          return allProductsListItems;
     }


    render(){
    
        return (
            <div>
                 <h1>I am product List component</h1>

                {/* {this.renderProductList} */}
                   
                    <ul>
                            {this.renderProductList()}
                    </ul>
                 
            </div>
        )
    }

}

export default ProductList;