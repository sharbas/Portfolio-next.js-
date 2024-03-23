'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

function Form() {
  const form = useRef();
  const [toastMessage, setToastMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mk7n8qu', 'template_hvpuqsn', form.current, {
        publicKey: 'caBSzZNwyS-apu0MG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setToastMessage("Email sent successfully!");
          // Clear input fields
          form.current.reset();
          // Hide toast after 5 seconds
          setTimeout(() => {
            setToastMessage("");
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setToastMessage("Failed to send email. Please try again.");
        },
      );
  };

  return (
    <form className="flex flex-col gap-y-4" ref={form} onSubmit={sendEmail}>
      {/* input  */}
      <div className="relative flex items-center">
        <Input type='name' name='user_name' id='user_name' placeholder='Name' />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Input type='email' name='user_email' id='user_email' placeholder='Email' />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
      <Textarea name='message' placeholder="Type Your Message Here." />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type='submit' className='flex items-center gap-x-1  max-w-[166px]'>Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
      {/* Toast message */}
      {toastMessage && <div className="bg-green-500 text-white p-2 rounded-md">{toastMessage}</div>}
    </form>
  );
}

export default Form;

