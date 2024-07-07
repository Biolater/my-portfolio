"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpekyyp");
  const { toast } = useToast();
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    if (state.succeeded && !toastShown) {
      toast({
        title: "Your message has been sent!",
        description: "Thanks for your message. I'll be in touch soon.",
      });
      setToastShown(true);
    }
  }, [state.succeeded, toastShown, toast]);

  return (
    <section id="contact" className="px-4 mx-auto py-6 md:py-12 container">
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Contact.
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              required
              id="message"
              name="message"
              placeholder="Enter your message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex">
            <Button
              type="submit"
              className="flex-grow"
              disabled={state.submitting}
              variant={"default"}
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
