import React,{createContext} from "react";
import all_products from "../../src/Components/Assets/all_product"

export const ShopContext = createContext(null);

const ShopContextProvider =(props)=>{
    const shopContextValue = {all_products}
    return(
        <ShopContext.Provider value={shopContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;