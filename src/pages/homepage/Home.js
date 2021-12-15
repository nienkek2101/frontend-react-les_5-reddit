import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [ dataPosts, setDataPosts ] = useState([]);
    useEffect(() => {
        async function fetchPosts() {
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(result.data.data);
                setDataPosts(result.data.data.children);

            } catch(e) {
                console.error(e);
            }
        };
        fetchPosts();
    }, []);
    return (
        <>
            <h1>{dataPosts[0].data.title}</h1>

        </>
    );

}

export default Home;

//data.children[0].data.title