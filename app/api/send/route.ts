// re_PhB4BphJ_L5dvSyvMiP8NtzSXdK7o19bC

import { EmailTemplate } from "@/components/email-template";
import * as React from "react";
import {Resend} from "resend"
// import { EmailTemplateProps } from "@/components/email-template"


const resend= new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
    try{
        const dataForm = await req.json()
        try{
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["cristianvaldes729@gmail.com"],
                subject: "cristian landing",
                                                react: React.createElement(EmailTemplate, {
                                                    firstName: dataForm.username,
                                                    message: dataForm.message,
                                                    email: dataForm.email
                                                }),
                text:"crisval",
            });
            return Response.json(data)
        } catch (error){
        return Response.json({error})
        }
    }catch(error){
        return Response.json({error});
    }
}