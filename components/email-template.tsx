import * as React from 'react'


interface EmailTemplateProps{
    firstName: string
    message:string
    email:string
}

export const EmailTemplate:React.FC<Readonly<EmailTemplateProps>>= ({
    firstName,message,email
})=>(
    <div>
        <h1>
            Email enviado de:{firstName}
        </h1>
        <h2>
            Mensaje:{message}
        </h2>
        <h3>
            correo enviado: {email}
        </h3>
    </div>
)