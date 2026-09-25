import { Button } from "@/components/ui/button";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardDemoPage() {
  return (
    <div className="flex flex-row min-h-screen items-center justify-center">
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Login to Your Account</CardTitle>
                <CardDescription>Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <p>This is the card content component</p>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Login
                </Button>
                <Button variant="outline" className="w-full">
                    login with Google
                </Button>
            </CardFooter>
        </Card>
    </div>
  );
}
