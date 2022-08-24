import React from 'react';
import ContentMiddle from './ContentMiddle';
import TotalCategorias from './TotalCategorias';
import TotalProductos from './TotalProductos';
import TotalUsuarios from './TotalUsuarios';


function ContentRowTop(props) {
    
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                {/* <h1 className="h3 mb-0 text-gray-800">Dashboard CafeArte</h1> */}
            </div>				
            
            <div className="row">            
                <TotalProductos/>
                <TotalUsuarios/>
                <TotalCategorias/>
                
                <ContentMiddle/>
                
            </div>
        </div>
    );
  }


export default ContentRowTop;