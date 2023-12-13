import React from 'react'
import "./admin.css"
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function Admi(props) {
    const { state } = useLocation();
    const [datalist, setdatalist] = useState([])
    let host = window.location.hostname;
    let protocol = window.location.protocol
    let url = null

    if (host === "localhost") {
        url = protocol + "//" + host + ":8000"
    } else {
        url = protocol + "//" + host
    }

    useEffect(() => {
        axios.get(`${url}/User/credentials`, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                // console.log(res.data)
                // validation(res.data)
                console.log(res.data.sort(compareAge));
                setdatalist(res.data)

            })
    }, [])


    let counter = 1;
    const showlist = datalist.sort((a,b) => a.userLocation - b.userLocation).map((item, index) => (
        <>
            {/* {(console.log(item.userRole))} */}
            {(item.userRole === "worker")? <div className="td-last btn-stack btn-stack-right" key={index}>
                {/* {console.log(index)} */}
                <a  className="btn">
                    {counter++}
                </a>
                <div className="space_sp"></div>
                <a  className="btn">
                    {item.userFirstName}
                </a>  
                <div className="space_sp"></div>
                <a  className="btn">
                    {item.userSecondName}
                </a>
                <div className="space_sp"></div>
                <a  className="btn">
                    {item.userLocation}
                </a> 
                <div className="space_sp"></div>
                <a  className="btn">
                    {/* {item.userLocation}+ */} +
                </a> 

            </div> : null}
           
        </>
    ));
    const compareAge = ( a, b) =>{

        return a.userLocation- b.userLocation;
    }
    console.log(datalist.sort(compareAge));
    
    const sorted_lis =  datalist.sort((a,b) => a.userLo - b.userLocation)
    // console.log(sorted_lis);
    const showPatients = sorted_lis.map( (item,index) => (
        <>
           {/* {(console.log(item.userRole))} */}
            {(item.userRole === "patient")? <div className="td-last btn-stack btn-stack-right" key={index}>
                {/* {console.log(index)} */}
                <a  className="btn">
                    {counter++}
                </a>
                <div className="space_sp"></div>
                <a  className="btn">
                    {item.userFirstName}
                </a>  
                <div className="space_sp"></div>
                <a  className="btn">
                    {item.userSecondName}
                </a>
                <div className="space_sp"></div>
                <a  className="btn">
                    {item.userLocation}
                </a> 
                <div className="space_sp"></div>
                <a  className="btn">
                    {/* {item.userLocation} */ }
                    +
                </a> 

            </div> : null}
        </>
    ))
    // console.log(state["data"]);
    return (
        <div className='body'>
            <nav>
                <div className="top">
                    <a className="navItem char" >{state["data"].userRole[0].toUpperCase()}</a>
                </div>
                <ul className="items">
                    <li>
                        <a className="navItem" >🦎</a>
                    </li>
                    <li>
                        <a className="navItem" >🎓</a>
                    </li>
                    <li>
                        <a className="navItem" >🦷</a>
                    </li>
                </ul>
                <div className="bottom">

                    <a className="navItem char" ></a>
                </div>
            </nav>
            <main>
                <div className="content">
                    <h1>{state["data"].userFirstName.toUpperCase()} Panel™</h1>
                    <p></p>
                    <div className="row">

                        <div className="col">
                            {(state["data"].userRole === "worker") ? 
                            <>
                            <div className="card">
                                <h2>
                                    List of All Patients
                                </h2>
                                <p>
                                    <i></i>
                                </p>
                                <div className="grid-table">
                                    <div className="show_titles">
                                        <span>Number</span>
                                        <div className="space_sp"></div>
                                        <span>First Name</span>
                                        <div className="space_sp"></div>
                                        <span>Second Name</span>
                                        <div className="space_sp"></div>
                                        <span>Location</span>
                                        <div className="space_sp"></div>
                                        <span>Add</span>                                                                                                                                    
                                    </div>
                                    {showlist}
                                </div>
                                <p>

                                </p>
                            </div>  
                            </>: null}

                            {(state["data"].userRole === "patient") ? 
                            <>
                            <div className="card">
                                <h2>
                                    List of All Worker
                                </h2>
                                <p>
                                    <i></i>
                                </p>
                                <div className="grid-table">
                                    <div className="show_titles">
                                        <span>Number</span>
                                        <div className="space_sp"></div>
                                        <span>First Name</span>
                                        <div className="space_sp"></div>
                                        <span>Second Name</span>
                                        <div className="space_sp"></div>
                                        <span>Location</span>
                                        <div className="space_sp"></div>
                                        <span>Add</span>
                                    </div>
                                    {showlist}
                                </div>
                                <p>

                                </p>
                            </div> 
                            <div className="card">
                                <h2>
                                    List of All Worker
                                </h2>
                                <p>
                                    <i></i>
                                </p>
                                <div className="grid-table">
                                    <div className="show_titles">
                                        <span>Number</span>
                                        <div className="space_sp"></div>
                                        <span>First Name</span>
                                        <div className="space_sp"></div>
                                        <span>Second Name</span>
                                        <div className="space_sp"></div>
                                        <span>Location</span>
                                        <div className="space_sp"></div>
                                        <span>Add</span>
                                    </div>
                                    {showlist}
                                </div>
                                <p>

                                </p>
                            </div> 
                            </>
                            : null}

                        </div>
                        <div className="col">
                            <div className="card">
                                <h2>Conclusion</h2>
                                <p>
                                    {/* For responsively styling a table like this, I think grids works the best. The only problem with the grid's current setup is that column widths have to be set manually.
                                    There might be something that can be done about that though. */}
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h2>Comments and Notes</h2>
                                <p>
                                    {/* Idk what the nav should do on mobile screen sizes yet. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
