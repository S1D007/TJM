"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import React from "react";

export default function page() {
  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex gap-3">
        <img alt="Logo" height={40} src="/LOGO.jpg" width={40} />
        <div className="flex flex-col"> Login</div>
      </CardHeader>
      <CardBody className="gap-3">
        <Input size="sm" type="email" label="Email" name="email" />
        <Input size="sm" type="text" label="Username" name="username" />
        <Input size="sm" type="password" label="Password" name="password" />
      </CardBody>
      <CardFooter>
        <p>
          Need to create an account? <a href="/signup">Sign up</a>
        </p>
      </CardFooter>
    </Card>
  );
}
