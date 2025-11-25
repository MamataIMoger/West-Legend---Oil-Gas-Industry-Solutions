import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { AnimatedInput, AnimatedTextarea } from "@/components/ui/animated-input";

const ContactForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedInput
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
        />

        <AnimatedInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          autoComplete="email"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedInput
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          autoComplete="tel"
        />

        <AnimatedInput
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <AnimatedTextarea
        label="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={6}
        autoComplete="off"
      />

      <button
        type="submit"
        className="relative overflow-hidden 
        bg-gradient-to-r from-[#004aad] to-secondary 
        text-white px-12 py-3 rounded-md font-semibold
        group transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <span className="relative z-10">Send Message</span>

        {/* Shine Effect */}
        <span
          className="absolute inset-0 bg-white/20 translate-x-[-150%] 
          group-hover:translate-x-[150%]
          transition-transform duration-700 ease-out"
        ></span>
      </button>
    </form>
  );
};

export default ContactForm;
