import React from 'react';

function ProductList2(props){
//      renderProductList =() =>{
//         let allProductsListItems=this.props.plist.map(product => {
//             return <li key={product.pid}>{product.pid} {product.name} {product.description}</li>
//         })

//         console.log(allProductsListItems);

//         return allProductsListItems;
//    }
        
         function x1(){
                   console.log();
                     let allProductsListItems=props.plist.map(product => {
            return <li key={product.pid}>{product.pid} {product.name} {product.description}</li>
        })
        console.log('allProductsListItems', allProductsListItems);
        return allProductsListItems;
         }
        
    return(
         
         <div>

          <h1>This is product list 2</h1>

           
            <ul>
           {x1()}
          </ul>
          

         </div>
    )

}
export default ProductList2;