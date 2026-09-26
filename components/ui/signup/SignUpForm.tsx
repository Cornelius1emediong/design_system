import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription
}  from "@/components/ui/card"

import {Button} from "@/components/ui/button"


import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"

import {Input} from "@/components/ui/input"

export function signUpPage({...props}: React.ComponentProps<typeof Card>){
    return(
        <Card>
            <CardHeader className="text-center space-y-3 ">
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                    Enter your information below to create your account
                </CardDescription>
                
            </CardHeader>
         <CardContent>
                <form className="space-y-4"
         </CardContent>
        </Card>
    )
}





export  function SignUpForm(){
    return(
        <div>
            sign up form
        </div>
    )
}