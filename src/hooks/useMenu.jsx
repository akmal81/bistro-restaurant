import { useEffect, useState } from 'react';

const useMenu = () => {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:5000/menus')
        .then(res => res.json())
        .then(data => {

            setMenu(data);
            setLoading(false);
        })
    },[])
    console.log(menu)
    return [menu, loading]
};

export default useMenu;