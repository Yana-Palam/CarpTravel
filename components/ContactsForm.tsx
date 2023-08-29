import { FC } from "react";
import { ContactsFormFields } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerOptions } from "@/helpers/contacts";
import ErrorIcon from "../public/icons/error-icon.svg";

const ContactsForm: FC = () => {
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    control,
    reset,
  } = useForm<ContactsFormFields>({
    shouldFocusError: false,
  });

  const onSubmit: SubmitHandler<ContactsFormFields> = (data) => {
    console.log("submit", data);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:flex gap-5 xl:grow xl:flex-col"
    >
      <div className="md:w-[221px] xl:w-full xl:flex xl:gap-5 xl:mb-10">
        <div
          className={`relative input-wrap mb-6 md:mb-7 xl:grow xl:mb-0 ${
            errors.fullName ? "error" : ""
          }`}
        >
          <label
            htmlFor="fullName"
            className="block  text-[12px] text-inherit font-extralight leading-loose tracking-wide mb-1"
          >
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="John Smith"
            className="form-input"
            {...register("fullName", registerOptions.fullName)}
            aria-invalid={errors.fullName ? "true" : "false"}
          />
          {errors.fullName && (
            <p role="alert" className="career-form-error">
              <ErrorIcon />
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div
          className={`relative input-wrap mb-6 xl:grow xl:mb-0 ${
            errors.email ? "error" : ""
          }`}
        >
          <label
            htmlFor="email"
            className="block text-[12px] font-extralight leading-loose tracking-wide mb-1"
          >
            E-mail
          </label>
          <input
            id="email"
            type="text"
            placeholder="Jjohnsmith@email.com"
            className="form-input"
            {...register("email", registerOptions.email)}
          />
          {errors.email && (
            <p role="alert" className="career-form-error">
              <ErrorIcon />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grow">
        <div
          className={`relative input-wrap mb-4 md:w-full  ${
            errors.message ? "error" : ""
          }`}
        >
          <label
            htmlFor="message"
            className="block text-[12px] font-extralight leading-loose tracking-wide mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            className="form-textarea md:h-[228px] xl:h-[258px]"
            {...register("message", registerOptions.message)}
          />
          {errors.message && (
            <p role="alert" className="career-form-error">
              <ErrorIcon />
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          className="uppercase text-[30px] font-medium block ml-auto xl:text-[32px]"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactsForm;
