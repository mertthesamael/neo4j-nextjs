import ContentBody from "@/components/layout/ContentBody";
import { LoginForm } from "@/components/shared/Forms/login-form";
import { SignupForm } from "@/components/shared/Forms/signup-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const getData = async () => {

  return await fetch('http://localhost:3000/api/get',
    {
      method: 'GET',
      headers: {
        "Conent-Type": "application/json"
      }
    }
  ).then(res => res.json())
}
export default async function Home() {

  return (
    <ContentBody>
        <div className="h-[500px]" >
          <Tabs defaultValue="sign-up" className="w-[25rem]">
            <TabsList className='w-full'>
              <TabsTrigger value="login" className='w-full'>Login</TabsTrigger>
              <TabsTrigger value="sign-up" className='w-full'>Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="sign-up">
              <SignupForm />
            </TabsContent>
          </Tabs>
        </div>
    </ContentBody>
  );
}
