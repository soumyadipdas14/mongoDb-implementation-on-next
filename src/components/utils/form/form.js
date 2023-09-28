"use client";
import React, { useState } from 'react'

export default function Form() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [error, setError] = useState([]);

    const handleSubmit = async (e)=>{
        e.preventDefault();


        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);



        const res = await fetch('/api/contact',{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message,

            })
        });

        const {msg} = await res.json();
        setError(msg);

        console.log(error);



    }

    return (
        <>
            <form onSubmit={handleSubmit} className='container d-flex justify-content-center'>
                <div class="card w-50">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" value={name} id="exampleFormControlInput1" placeholder="Enter Your name" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">Email address</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" value={email} id="exampleFormControlInput2" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" onChange={(e) => setMessage(e.target.value)} value={message} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <input class="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </div>

            </form>
        </>
    )
}
