"use client";
import { signIn } from 'next-auth/react'
import axios from "axios";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "../../hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const router = useRouter(); 
  const registermodal = useRegisterModal();
  const loginmodal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials',{
        ...data,
        redirect:false,
    }).then((callback) => {
        setIsLoading(false);
        if(callback?.ok){
            toast.success("Logged in");
            router.refresh();
            loginmodal.onClose();
         }
        if(callback?.error) {
            toast.error(callback.error);
        }
    })
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading center title="Welcome back" subtitle="Login to your account" />

      <div className="flex flex-col md:flex md:flex-row gap-4">
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>

      <div className="flex flex-col md:flex md:flex-row gap-4">
        <Input
          id="password"
          label="Password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          type="password"
        />
      </div>
    </div>
  );
  const footerContent = (
    <div className="mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />

      <div
        className="text-neutral-500
            text-center
            mt-4
            font-light"
      >
        <div className="flex flex-row justify-center items-center gap-2">
          <div>Already have an account</div>
          <div
            className="text-black cursor-pointer hover:underline"
            onClick={registermodal.onClose}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginmodal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginmodal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
