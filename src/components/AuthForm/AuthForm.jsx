"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const AuthForm = () => {
  return (
    <>
      <div className='w-[100%] h-auto flex items-start justify-center '>
        <Tabs
          defaultValue='login'
          className='w-[400px] transition-all duration-150 ease-in-out'>
          <TabsList>
            <TabsTrigger value='login' className='w-[200px]'>
              Login
            </TabsTrigger>
            <TabsTrigger value='signup' className='w-[200px]'>
              Signup
            </TabsTrigger>
          </TabsList>
          <TabsContent value='login'>
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to your account</CardDescription>
              </CardHeader>

              <CardContent>
                <Login />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='signup'>
            <Card>
              <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>Create a new account</CardDescription>
              </CardHeader>

              <CardContent>
                <Signup />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default AuthForm;
