import React, { useState, useEffect} from 'react';

export const CustomContext = React.createContext()

export const CustomProvider  = (props) => {
    const [points, setPoints] = useState(
        JSON.parse(localStorage.getItem('points')) || '')

    useEffect(() => {
        localStorage.setItem('points', JSON.stringify(points))
    }, [points])


    return <CustomContext.Provider value={{ points, setPoints }}>
        {props.children}
    </CustomContext.Provider>
}