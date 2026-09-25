import { Button } from "@/components/ui/button";

export default function ButtonDemoPage(){
    return (
        <div className = "flex flex-row min-h-screen items-center justify-center">
            <Button>Default</Button>
            <Button  variant = {'secondary'}> secondary</Button>
            <Button  variant = {'outline'}> outline</Button>
            <Button  variant = {'ghost'}> ghost</Button>
            <Button  variant = {'destructive'}> destructive</Button>
            <Button  variant = {'link'}> link</Button>

        </div>
    )
}