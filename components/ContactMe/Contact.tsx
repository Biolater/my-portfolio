"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState, useRef, FormEvent } from "react";
import { emailValidation } from "@/utils/emailValidation";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpekyyp");
  const { toast } = useToast();
  const [toastShown, setToastShown] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (state.succeeded && !toastShown) {
      toast({
        title: "Your message has been sent!",
        description: "Thanks for your message. I'll be in touch soon.",
      });
      if (nameInputRef.current !== null) {
        nameInputRef.current.value = "";
      }
      if (messageInputRef.current !== null) {
        messageInputRef.current.value = "";
      }
      if (emailInputRef.current !== null) {
        emailInputRef.current.value = "";
      }
      setToastShown(true);
    }
  }, [state.succeeded, toastShown, toast]);

  const handleSendMessage = (e: FormEvent) => {
    const nameInputValue = nameInputRef.current?.value;
    const messageInputValue = messageInputRef.current?.value;
    const emailInputValue = emailInputRef.current?.value;
    const formEvent = e as React.FormEvent<HTMLFormElement>;
    formEvent.preventDefault();
    if (
      nameInputValue &&
      messageInputValue &&
      (nameInputValue.trim().length === 0 ||
        messageInputValue.trim().length === 0) // Corrected this line
    ) {
      toast({
        title: "Please fill in all fields",
        description: "Name and message are required.",
        variant: "destructive",
      });
    } else if (emailInputValue && !emailValidation(emailInputValue)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    } else {
      handleSubmit(formEvent);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 max-w-7xl mx-auto py-6 md:py-12 container"
    >
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Contact.
        </h2>
        <form onSubmit={handleSendMessage} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <motion.div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                ref={nameInputRef}
                required
                type="text"
                id="name"
                name="name"
                className="md:py-6"
                placeholder="Enter your name"
              />
            </motion.div>
            <motion.div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                ref={emailInputRef}
                required
                type="email"
                id="email"
                name="email"
                className="md:py-6"
                placeholder="Enter your email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </motion.div>
          </div>
          <motion.div className="grid w-full items-center gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              ref={messageInputRef}
              required
              id="message"
              name="message"
              className="md:pb-12"
              placeholder="Enter your message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </motion.div>
          <motion.div className="flex sm:justify-end">
            <Button
              type="submit"
              className="flex-grow flex gap-2 items-center sm:flex-grow-0 "
              disabled={state.submitting}
              variant={"default"}
            >
              Send Message
              {state.submitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
            </Button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
