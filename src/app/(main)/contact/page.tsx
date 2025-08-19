/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { WarpBackground } from "@/components/ui/WarpBackground";
import { useCreateContactMutation } from "@/lib/features/contact/contactApi";
import { Mail, MessageCircle, MessageSquare, User } from "lucide-react";
import { useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
  general: string;
}

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({ 
    name: "", 
    email: "", 
    message: "" 
  });
  const [error, setError] = useState<FormErrors>({ 
    name: "", 
    email: "", 
    message: "", 
    general: "" 
  });
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [contactData, { isLoading, isSuccess }] = useCreateContactMutation();

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setError({
        name: "",
        email: "",
        message: "",
        general: "",
      });
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }
  }, [isSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(prev => ({ ...prev, [name]: "", general: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side Validation
    const updatedErrors: FormErrors = { name: "", email: "", message: "", general: "" };
    let hasError = false;

    if (!formData.name.trim()) {
      updatedErrors.name = "Name is required";
      hasError = true;
    }
    if (!formData.email.trim()) {
      updatedErrors.email = "Email is required";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      updatedErrors.email = "Enter a valid email";
      hasError = true;
    }
    if (!formData.message.trim()) {
      updatedErrors.message = "Message is required at least 10 characters";
      hasError = true;
    }

    if (hasError) {
      setError(updatedErrors);
      return;
    }

    // Submit to server
    try {
      await contactData(formData).unwrap();
    } catch (error: any) {
      console.log("Server error:", error);
      const message = error?.data?.message || "Something went wrong";
      const serverErrors: FormErrors = { name: "", email: "", message: "", general: "" };
      
      if (message.includes("Name")) {
        serverErrors.name = message;
      } else if (message.includes("email")) {
        serverErrors.email = message;
      } else if (message.includes("Message")) {
        serverErrors.message = message;
      } else {
        serverErrors.general = message;
      }
      
      setError(serverErrors);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <main className="relative min-h-screen w-full overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* background effect */}
      <WarpBackground>
      <div>
        <h1 className="md:text-5xl text-4xl font-bold text-center md:pt-8 pt-4 font-secondary textGradient">
          Get In Touch
        </h1>
        <p className="md:text-xl text-lg text-gray-600 dark:text-gray-300 pt-4 md:pt-8 text-center font-secondary">
          Have a project in mind or want to collaborate? Feel free to reach out{" "}
          <br className="md:block hidden" /> through the form below or via my
          contact information.
        </p>
        {/* grid contact from */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:px-8 px-4">
          {/* contact from  */}
          <div className="relative w-full h-full rounded-sm overflow-hidden">
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-600 via-cyan-600 to-indigo-600"/>
            <div className="w-full h-full border rounded-sm p-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="text-purple-600"/>
                <h2 className="font-semibold text-2xl text-primaryLight">Send a Message</h2>
              </div>

              {/* contact from start */}
              <form onSubmit={handleSubmit} className="pt-8">
                <div className="flex flex-col gap-1 pb-4">
                  <div className="flex items-center gap-2">
                    <User />
                    <label htmlFor="name">Full name</label>
                  </div>
                  <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Enter your name" className="border rounded-md p-2"/>
                  {error.name && <p className="text-red-500">{error.name}</p>}
                </div>
                <div className="flex flex-col gap-1 pb-4">
                  <div className="flex items-center gap-2">
                    <Mail />
                    <label htmlFor="email">Email</label>
                  </div>
                  <input type="text" name="email" onChange={handleChange} value={formData.email} placeholder="Enter your email" className="border rounded-md p-2"/>
                  {error.email && <p className="text-red-500">{error.email}</p>}
                </div>
                <div className="flex flex-col gap-1 pb-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare />
                    <label htmlFor="message">Message</label>
                  </div>
                  <textarea rows={7} name="message" onChange={handleChange} value={formData.message} placeholder="Tell me about your feedback..." className="border rounded-md p-2"/>
                  {error.message && <p className="text-red-500">{error.message}</p>}
                </div>
                  {/* ✅ Success Alert */}
                  {showSuccess && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded text-sm font-medium">
                      ✅ Message sent successfully!
                    </div>
                  )}
                <button type="submit" disabled={isLoading} className="mt-4 w-full text-white py-2 cursor-pointer rounded-md bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 hover:opacity-90 hover:scale-102 transition duration-500">Send</button>
              </form>
              {/* contact from end */}

            </div>
          </div>

          {/* contact info  */}
          <div className="relative w-full h-[400px] rounded-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-600 via-cyan-600 to-indigo-600"/>
              <div className="w-full h-full border rounded-sm p-4">contact info</div>
            </div>
        </div>
      </div>
      </WarpBackground>
    </main>
  );
};

export default Contact;