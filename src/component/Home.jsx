// import { useEffect, useState } from "react";
import Mobile from "./Mobile";

import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedMobile = useLoaderData()
    console.log(loadedMobile)
    const [mobiles, setMobiles] = useState(loadedMobile);
    // const [mobileData, setMobileData] = useState([]);
    // const [searchValue, setSearchValue] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        // setSearchValue(name)

        const remainingMobile = mobiles.filter(mobile => mobile.brand.toLowerCase() == name.toLowerCase())
        console.log(remainingMobile)
        setMobiles(remainingMobile)

    }



    // useEffect(() => {
    //     fetch('/data.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             if (searchValue) {
    //                 const searchMobile = data.filter(item => item.brand == searchValue)
    //                 setMobileData(searchMobile)
    //             } else {
    //                 setMobileData(data)
    //             }
    //         })
    // }, [searchValue])


    return (
        <div>

            <div className="my-6">
                <form onSubmit={ handleSearch }>
                    <input type="text" name="name" placeholder="search item" />
                    <button>Search</button>
                </form>
            </div>

            <div className="grid gap-4 grid-cols-3 ml-5">
                {
                    // mobileData.map((mobile, index) => <Mobile key={ index } mobile={ mobile }></Mobile>)
                    mobiles.map((mobile, index) => <Mobile key={ index } mobile={ mobile }></Mobile>)
                }
            </div>
        </div>
    );
};

export default Home;
