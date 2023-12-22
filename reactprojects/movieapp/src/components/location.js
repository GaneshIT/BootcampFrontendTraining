import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useState } from 'react';
import { locationcontext } from '../context';
export default function Location(){
    const {locationValue}=useContext(locationcontext);

    const[state,setState]=useState('');
    const[location,setLocation]=useState('');
    const[locationslist,setLocationsList]=useState([]);
    const readState=(e)=>{
            setState(e.target.value);
        }
    const readLocation=(e)=>{
            setLocation(e.target.value);
        }
    const readLocationList=()=>{
            setLocationsList(["Chennai","Bangalore"])
    }
    const addLocation=()=>{
        fetch("http://localhost:3001/location",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({"state":state,"location":location})
        }).then((response)=>alert("Location added"))
        .catch((err)=>alert(err));
    }
    useEffect(()=>{
        
    })

    let checkLocation;
    if(locationValue=='Bangalore')
        checkLocation="Bookings...Open"
    else
        checkLocation="No Booking.."
    return(
        <div>
            
            <div className="row">
                <div className="col-md-4">
                    <form>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" value={state} onChange={readState} className='form-control' />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" value={location} onChange={readLocation} className='form-control' />
                </div>
                <input type="button" value="Save" onClick={addLocation} className="btn btn-primary" />
                <input type="button" value="Reset" className="btn btn-secondary" />
                    <div>
                        {state+' '+location}
                    </div>
                    </form>
                </div>
                <div className="col-md-8">

                </div>
            </div>           
        </div>
    );
}