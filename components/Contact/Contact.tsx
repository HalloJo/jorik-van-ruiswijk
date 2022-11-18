import styles from "../Contact/Contact.module.scss";
import Heading from "../Heading/Heading";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import ContactArt from "../ContactArt/ContactArt";
import { motion as m, Variants } from "framer-motion";
import { useState } from "react";

type FormInput = {
  fullName: string;
  email: string;
  message: string;
};

const formItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitted },
  } = useForm<FormInput>({
    mode: "onBlur",
    defaultValues: { fullName: "", email: "", message: "" },
  });

  const handleOnSubmit = async (data: FormInput) => {
    try {
      fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__formWrapper}>
          <Heading heading="Contact" exception={"beige"} />
          <m.form
            initial="hidden"
            whileInView="visible"
            variants={formItem}
            onSubmit={handleSubmit(handleOnSubmit)}
            className={styles.contact__form}
          >
            <m.div variants={formItem} className={styles.contact__inputWrapper}>
              <label className={styles.contact__inputLabel} htmlFor="">
                Full name*
              </label>
              <input
                {...register("fullName", { required: true })}
                className={styles.contact__input}
                type="text"
                name="fullName"
                placeholder="Type your full name here.."
              />
              {errors.fullName && (
                <m.span
                  whileInView="visible"
                  variants={formItem}
                  className={styles.contact__errorMessage}
                >
                  👆 Your full name is required!
                </m.span>
              )}
            </m.div>
            <m.div variants={formItem} className={styles.contact__inputWrapper}>
              <label className={styles.contact__inputLabel} htmlFor="">
                E-mail*
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
                className={styles.contact__input}
                name="email"
                type="email"
                placeholder="example@provider.com"
                autoComplete="off"
              />
              {errors.email && (
                <span className={styles.contact__errorMessage}>
                  👆 A real email address is required!
                </span>
              )}
            </m.div>
            <m.div variants={formItem} className={styles.contact__inputWrapper}>
              <label className={styles.contact__inputLabel} htmlFor="">
                Your message*
              </label>
              <textarea
                {...register("message", { required: true, min: 18, max: 99 })}
                className={styles.contact__input}
                name="message"
                placeholder="Your message.."
              />
              {errors.message && (
                <span className={styles.contact__errorMessage}>
                  👆 A message is required!
                </span>
              )}
            </m.div>
            {isDirty && <Button type="submit" label="Submit" />}
            {isSubmitted && (
              <span className={styles.contact__successMessage}>
                👍 Form succesfully submitted, thank you!
              </span>
            )}
          </m.form>
        </div>
        <ContactArt />
      </div>
    </section>
  );
};

export default Contact;
