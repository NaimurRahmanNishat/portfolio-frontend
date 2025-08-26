/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from 'react'
import { Mail, MessageCircle, MessageSquare, User } from "lucide-react";
import { useForm } from 'react-hook-form';
import { useCreateContactMutation } from '@/lib/features/contact/contactApi';


interface FormData {
    name: string;
    email: string;
    message: string;
}
const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [contactData, { isLoading, isSuccess }] = useCreateContactMutation();

    useEffect(() => {
        if (isSuccess) {
            reset(); // ✅ Reset the form
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
        }
    }, [isSuccess, reset]);

    const onSubmit = async (data: FormData) => {
        try {
            await contactData(data).unwrap();
        } catch (error: any) {
            console.log("Server error:", error);
        }
    };

    return (
        <div>
            <div className="w-full h-full border rounded-sm p-4">
                <div className="flex items-center gap-2">
                    <MessageCircle className="text-purple-600" />
                    <h2 className="font-semibold text-2xl text-primaryLight">
                        Send a Message
                    </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="pt-8">
                    {/* Name */}
                    <div className="flex flex-col gap-1 pb-4">
                        <div className="flex items-center gap-2">
                            <User />
                            <label htmlFor="name">Full name</label>
                        </div>
                        <input
                            type="text"
                            id="name"
                            {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })}
                            placeholder="Enter your name"
                            className="border rounded-md p-2"
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1 pb-4">
                        <div className="flex items-center gap-2">
                            <Mail />
                            <label htmlFor="email">Email</label>
                        </div>
                        <input
                            type="email"
                            id="email"
                            {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email"}})}
                            placeholder="Enter your email"
                            className="border rounded-md p-2"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1 pb-2">
                        <div className="flex items-center gap-2">
                            <MessageSquare />
                            <label htmlFor="message">Message</label>
                        </div>
                        <textarea
                            rows={7}
                            id="message"
                            {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters"}})}
                            placeholder="Tell me about your feedback..."
                            className="border rounded-md p-2"
                        />
                        {errors.message && (
                            <p className="text-red-500">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Success Alert */}
                    {showSuccess && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded text-sm font-medium">
                            ✅ Message sent successfully!
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-4 w-full text-white py-2 cursor-pointer rounded-md bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 hover:opacity-90 hover:scale-102 transition duration-500"
                    >
                        {isLoading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;