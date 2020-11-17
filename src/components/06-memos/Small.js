import React from 'react';


// Solo se renderiza nuevamente cuando cambian las propertys
export const Small = React.memo(({value}) => {

    console.log('Me volvi a llamar :(')
    return(
        <small> { value } </small>
    )
})