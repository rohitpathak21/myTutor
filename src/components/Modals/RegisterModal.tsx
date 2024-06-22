"use client";
import axios from 'axios';
import React from 'react';
import {FcGoogle} from 'react-icons/fc'
import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

import useRegisterModal from '../../hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Input';
import toast from 'react-hot-toast';
import Button from '../Button';

const RegisterModal = () => {
    const RegisterModal = useRegisterModal();
    const[isLoading, setIsLoading] = useState(false);

    const{
        register,
        handleSubmit,
        formState : {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues:{
            email:'',
            name:'',
            gender:'',
            age:'',
            phone:'',
            password:'',
            
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data).then(() => {
            RegisterModal.onClose();
        }).catch ((error) =>{
            toast.error("Something went wrong");
        }).finally(()=>{
            setIsLoading(false);
        })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
        <Heading center title="Welcome to myTutor" subtitle='Create an account'/>
        
        <div className='flex flex-col md:flex md:flex-row gap-4'>
        <Input id='email' label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />

        <Input id='name' label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
        </div>

        <div className='flex flex-col md:flex md:flex-row gap-4'>
        <Input id='gender' label='Gender'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />

        <Input id='age' label='Age'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />

        </div>

        <div className='flex flex-col md:flex md:flex-row gap-4'>
        <Input id='phone' label='Phone'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />

        <Input id='password' label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='password'
        />

        </div>
        </div>
    )
    const footerContent = (
        <div className='mt-3'>
            <hr />
            <Button
            outline
            label="Continue with Google"
            icon={FcGoogle}
            onClick={()=>{}}/>

            <div className='text-neutral-500
            text-center
            mt-4
            font-light'> 
             <div className='flex flex-row justify-center items-center gap-2'>
              <div>Already have an account</div>
              <div className='text-black cursor-pointer hover:underline'
              onClick={RegisterModal.onClose}>Log in</div>
             </div>

            </div>
        </div>
    )
    
  return (
    <Modal disabled={isLoading}
    isOpen={RegisterModal.isOpen}
    title="Register"
    actionLabel="Continue"
    onClose={RegisterModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent}
    />
  );
}

export default RegisterModal;