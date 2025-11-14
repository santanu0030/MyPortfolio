import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdEmail, MdPhone } from "react-icons/md"; // <-- Added icons

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-700">
          Please fill out the form below to contact me.
        </p>

        {/* Contact Info Section */}
        <div className="mt-4 flex flex-col gap-2 text-gray-800">
          <div className="flex items-center gap-2">
            <MdEmail className="text-red-500 text-xl" />
            <a
              href="mailto:santanudas0030@gmail.com"
              className="text-blue-600 hover:underline"
            >
              santanudas0030@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone className="text-green-600 text-xl" />
            <a
              href="tel:+918001585708"
              className="text-blue-600 hover:underline"
            >
              +91 8001585708
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center justify-center mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

            {/* Name Field */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your query"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
