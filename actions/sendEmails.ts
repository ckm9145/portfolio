"use server";
import React from "react";
import {Resend} from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    // console.log("Running on server");
    // console.log(formData.get("senderEmail"));

    const message = formData.get('message');
    const email = formData.get('email');

    
    if(!validateString(email, 500)){
        return {
            error: "Invalid email",
        };
    }

    if(!validateString(message, 5000)){
        return{
            error: "Invalid message",
        };
    }
    let data; 
    try{
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 'ckmorikawa@gmail.com',
            subject: 'Message from contact form',
            reply_to: email as string,
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                email: email as string
            })
            // react: <ContactFormEmail message={message} email={email} />
        });
    }catch(error : unknown){
        return {
            error: getErrorMessage(error as Error),
        };
       
    }
    return {
        data,
    };
    
};