"use client";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@repo/ui/src/Icons";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex flex-col space-y-4 w-screen h-screen justify-center items-center">
      <img src="/logo.svg" className="w-1/6 rounded-xl" alt="gkh-logo" />
      <div className="flex flex-col space-y-2 min-w-72">
        <div>
          <h1 className="text-xl font-semibold">Login to The Journal Me</h1>
          <p className="text-sm text-gray-400 font-light">
            Login to your TJM Account.
          </p>
        </div>
        <div className="flex flex-col space-y-2 justify-center items-center w-full">
          <Input
            // value={signupUserData.email}
            size="lg"
            className="font-semibold"
            type="text"
            label="Username"
            placeholder="Create your username"
            // onChange={e => {
            //   setSignupUserData({ ...signupUserData, email: e.target.value });
            // }}
          />
          <Input
            // value={signupUserData.email}
            size="lg"
            className="font-semibold"
            type="email"
            label="Email"
            placeholder="Enter your email"
            // onChange={e => {
            //   setSignupUserData({ ...signupUserData, email: e.target.value });
            // }}
          />
          <Input
            // value={signupUserData.password}
            size="lg"
            label="Password"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                data-testid="toggle-password-visibility"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            // onChange={e => {
            //   setSignupUserData({ ...signupUserData, password: e.target.value });
            // }}
          />
          <Button
            // isLoading={loading}
            size="lg"
            className="font-semibold w-full"
            variant="flat"
            color="primary"
            onClick={() => {
              //   signup(router);
            }}
          >
            {/* {loading ? 'Just a sec...' : 'Complete Signup'} */}
            Complete Login
          </Button>
          <div className="flex flex-row space-x-2 justify-center items-center">
            <p className="text-sm text-gray-400 font-light">
              Don't have an account?
            </p>
            <Button
              size="sm"
              className="font-semibold"
              variant="faded"
              color="primary"
              onClick={() => router.push("/auth/signup")}
            >
              Signup Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
