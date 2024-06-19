"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import React from "react";

export default function page() {
  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex gap-3">
        <img alt="Logo" height={40} src="/LOGO.jpg" width={40} />
        <div className="flex flex-col"> Sign Up</div>
      </CardHeader>
      <CardBody className="gap-3">
        <Input size="sm" type="text" label="Name" name="name" />
        <Input size="sm" type="email" label="Email" name="email" />
        <Input size="sm" type="text" label="Username" name="username" />
        <Input size="sm" type="password" label="Password" name="password" />
        <RadioGroup label="Account Type">
          <Radio value="PRIVATE">Private</Radio>
          <Radio value="PUBLIC">Public</Radio>
          <Radio value="ANONYMOUS">Anonymous</Radio>
        </RadioGroup>
        <Input size="sm" type="text" label="Bio" name="bio" />
        <Input
          size="sm"
          type="text"
          label="Profile Picture URL"
          name="profilePicture"
        />
      </CardBody>
    </Card>
  );
}
