import React from 'react'
import { Vortex } from 'react-loader-spinner'

export function Loader() {
  return (
     <div style={{textAlign: 'center'}}>
        <Vortex
           visible={true}
           height="80"
           width="80"
           ariaLabel="vortex-loading"
           wrapperStyle={{margin: '0 auto'}}
           wrapperClass="vortex-wrapper"
           colors={['#aeb8fe', '#aeb8fe', '#aeb8fe', '#aeb8fe','#aeb8fe', '#aeb8fe']}
        />
     </div>
  );
}
