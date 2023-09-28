import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/model/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    const {name, email, message} = await req.json();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    try {
        await connectDB();
        await Contact.create({name,email,message});

        return NextResponse.json({
            msg: ["Message sent successfully"], success: true
        })
    }
    
    catch (error) {
      console.log(error.message);
            return NextResponse.json({msg: "Unable to send message"});
        
    }


    // return NextResponse.json({msg: ['From contact route.js']});
}


export async function GET(req){

    try {
        await connectDB();
        let result = await Contact.find();
        return NextResponse.json({
           result
        })
       
    }
    
    catch (error) {
        console.log(error.message);
        if (error instanceof mongoose.Error.ValidationError){
            let errorList = [];
            for (let e in error.errors){
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            return NextResponse.json({msg: errorList})
        }

        else{
            return NextResponse.json({msg: "ck"});
        }
    }


    // return NextResponse.json({msg: ['From contact route.js']});
}