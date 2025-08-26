import React from 'react'
import { IoMdContacts } from 'react-icons/io';
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from 'next/link';

interface socialProps {
    path: string,
    name: string,
    icon: React.ReactNode
}

const socials: socialProps[] = [
    { path: "https://github.com/NaimurRahmanNishat", name: "Github", icon: <FiGithub className='text-purple-700' /> },
    { path: "https://www.linkedin.com/in/naimur-rahman-11a621210", name: "Linkedin", icon: <FiLinkedin className='text-purple-700' /> },
    { path: "https://www.facebook.com/profile.php?id=61576332312271", name: "Facebook", icon: <FiFacebook className='text-purple-700' /> },
]

const ContactMe = () => {
    return (
        <div className='flex flex-col gap-4 md:gap-10'>
            <div className='flex items-center gap-2'>
                <IoMdContacts size={36} className='p-1 text-2xl md:text-3xl rounded-sm bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200' />
                <h1 className='text-2xl md:text-3xl text-primaryLight font-medium'>Contact With Me</h1>
            </div>
            <div className='grid grid-cols-2 xl:grid-cols-3 items-center gap-2'>
                {socials.map((item, index) => {
                    return (
                        <Link key={index} href={item.path} className='flex hover:bg-gray-200 dark:hover:bg-gray-900 transition-all duration-500 items-center gap-2 border px-6 py-3 rounded-sm cursor-pointer justify-center' target='_blank'>
                            {item.icon}
                            <span>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
            <div className='px-2 py-1 w-fit rounded-sm bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200'>
                <p className='text-sm font-medium'>Response time: <span className='font-semibold'>24 hours</span></p>
            </div>
        </div>
    )
}

export default ContactMe;