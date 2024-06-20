"use client";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@repo/ui/src/Icons";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MoreInfoModal from "@/components/singup/MoreInfoModal";

export default function Page() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex flex-col space-y-4 w-screen h-screen justify-center items-center">
      <MoreInfoModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <img src="/logo.svg" className="w-1/6 rounded-xl" alt="gkh-logo" />
      <div className="flex flex-col space-y-2 min-w-72">
        <div>
          <h1 className="text-xl font-semibold">Signup to The Journal Me </h1>
          <p className="text-sm text-gray-400 font-light">
            Create an account to start writing your journal.
          </p>
        </div>
        <div className="flex flex-col space-y-2 justify-center items-center">
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
              onOpen();
              //   signup(router);
            }}
          >
            {/* {loading ? 'Just a sec...' : 'Complete Signup'} */}
            Complete Signup
          </Button>
          <div className="flex flex-row space-x-2 justify-center items-center">
            <p className="text-sm text-gray-400 font-light">
              Already have an account?
            </p>
            <Button
              size="sm"
              className="font-semibold"
              variant="faded"
              color="primary"
              onClick={() => router.push("/auth/login")}
            >
              Login Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
