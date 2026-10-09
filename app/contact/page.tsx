"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

// components
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// data
import { info } from "../data/data";

/**
 * Formspree endpoint. Set NEXT_PUBLIC_FORMSPREE_ID in .env.local (and in the
 * build environment used for GH Pages) to a form created with
 * hik8hik@gmail.com. If it is missing, the form gracefully falls back to a
 * prefilled mailto: link so nothing is ever silently lost.
 */
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";
const OWNER_EMAIL = "hik8hik@gmail.com";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries()) as Record<string, string>;

    // Basic validation
    if (!payload.name || !payload.email || !payload.message) {
      setError("Please fill in your name, email and message.");
      setStatus("error");
      return;
    }

    // Fallback path: no Formspree ID configured -> open the user's mail client
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(
        `Portfolio enquiry from ${payload.name}`,
      );
      const body = encodeURIComponent(
        `Name: ${payload.name}\n` +
          `Email: ${payload.email}\n` +
          `Phone: ${payload.phone || "-"}\n` +
          `Service: ${payload.service || "-"}\n\n` +
          `${payload.message}`,
      );
      window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data && (data.error || data.errors?.[0]?.message)) ||
            "Something went wrong. Please try again.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Failed to send message.";
      setError(msg);
      setStatus("error");
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-[#08c67a] dark:text-accent">
                Inquire, get a quote or just hire me
              </h3>
              <p className="text-white/60">
                Fill out the form and I&apos;ll get back to you as soon as
                possible. Messages arrive straight in my inbox.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  autoComplete="tel"
                />
              </div>

              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="webdev">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="backend">Backend &amp; APIs</SelectItem>
                    <SelectItem value="other">Something else</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                placeholder="Draft your message here."
                required
              />

              <Button
                type="submit"
                size="md"
                className="max-w-40 flex items-center justify-center gap-2"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {status === "success" && (
                <div className="flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Thanks — your message is on its way. I&apos;ll get back to
                    you shortly.
                  </span>
                </div>
              )}

              {status === "error" && error && (
                <div className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>

          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, infoIndex) => (
                <li key={infoIndex}>
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.target === "_blank" ? "noreferrer" : undefined}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#29292c] text-[#08c67a] dark:text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-black/60 dark:text-white/60">
                        {item.title}
                      </p>
                      <h3 className="text-black dark:text-white text-xl">
                        {item.data}
                      </h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
