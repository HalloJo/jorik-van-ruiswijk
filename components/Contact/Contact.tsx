import styles from "../Contact/Contact.module.scss";
import Heading from "../Heading/Heading";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import ContactArt from "../ContactArt/ContactArt";

type FormInput = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

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
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className={styles.contact__form}
          >
            <div className={styles.contact__inputWrapper}>
              <label className={styles.contact__inputLabel} htmlFor="">
                Full name*
              </label>
              <input
                {...register("name", { required: true })}
                className={styles.contact__input}
                type="text"
                placeholder="Type your full name here.."
              />
              {errors.name && (
                <span className={styles.contact__errorMessage}>
                  👆 Your full name is required!
                </span>
              )}
            </div>
            <div className={styles.contact__inputWrapper}>
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
                type="email"
                placeholder="example@provider.com"
                autoComplete="off"
              />
              {errors.email && (
                <span className={styles.contact__errorMessage}>
                  👆 A real email address is required!
                </span>
              )}
            </div>
            <div className={styles.contact__inputWrapper}>
              <label className={styles.contact__inputLabel} htmlFor="">
                Your message*
              </label>
              <textarea
                {...register("message", { required: true, min: 18, max: 99 })}
                className={styles.contact__input}
                placeholder="Your message.."
              />
              {errors.message && (
                <span className={styles.contact__errorMessage}>
                  👆 A message is required!
                </span>
              )}
            </div>
            <Button type="submit" label="Submit" />
          </form>
        </div>
        <ContactArt />
      </div>
    </section>
  );
};

export default Contact;
