"use client";

import { FC, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputMaskCorrect from "./InputMaskCorrect";
import { CareerFormFields } from "@/types";
import { registerOptions } from "@/helpers/career";
import ErrorIcon from "../public/icons/error-icon.svg";

const CareerForm: FC = () => {
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    control,
    reset,
  } = useForm<CareerFormFields>({
    shouldFocusError: false,
  });

  const [tel, setTel] = useState("");

  const onSubmit: SubmitHandler<CareerFormFields> = (data) => {
    console.log("submit", data);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:gap-5 md:mb-4 xl:gap-6">
        <div className="md:w-[221px] xl:w-1/2 xl:basis-1/2">
          <div
            className={`relative input-wrap mb-4 ${
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
            className={`relative input-wrap mb-4 ${
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

          <div
            className={`relative input-wrap mb-4 ${
              errors.position ? "error" : ""
            }`}
          >
            <label
              htmlFor="position"
              className="block text-[12px] font-extralight leading-loose tracking-wide mb-1"
            >
              Position
            </label>
            <input
              id="position"
              type="text"
              placeholder="Movie maker"
              className="form-input"
              {...register("position", registerOptions.position)}
            />
            {errors.position && (
              <p role="alert" className="career-form-error">
                <ErrorIcon />
                {errors.position.message}
              </p>
            )}
          </div>

          <div
            className={`relative input-wrap mb-4 md:mb-0 ${
              errors.phone ? "error" : ""
            }`}
          >
            <label
              htmlFor="phone"
              className="block text-[12px] font-extralight leading-loose tracking-wide mb-1"
            >
              Phone
            </label>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={registerOptions.phone}
              render={({ field }) => (
                <InputMaskCorrect
                  mask="+ 38 (999) 99 99 999"
                  maskChar=""
                  value={field.value}
                  onChange={field.onChange}
                >
                  {(inputProps: any) => (
                    <input
                      className="form-input"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="+ 38 (097) 12 34 567"
                      {...inputProps}
                    />
                  )}
                </InputMaskCorrect>
              )}
            />
            {errors.phone && (
              <p role="alert" className="career-form-error">
                <ErrorIcon />
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div
          className={`relative input-wrap mb-4 md:w-[221px] md:mb-0 xl:w-1/2 xl:basis-1/2 ${
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
      </div>
      <div className="md:flex gap-5">
        <div className="relative mb-4 md:mb-0 md:w-[221px]  xl:w-1/2 xl:basis-1/2">
          <input
            type="checkbox"
            id="policy"
            className="visually-hidden career-checked-input"
            {...register("policy", registerOptions.policy)}
          />
          <label
            className={`flex gap-2 text-[12px] font-extralight leading-[1.83] career-checked-label ${
              errors.policy ? "error" : ""
            }`}
            htmlFor="policy"
          >
            <div className="career-check-icon">
              <span className="career-check-icon-inside"></span>
            </div>
            <span>
              I confirm my consent to the processing of personal data.
            </span>
          </label>
        </div>

        <button
          className="uppercase text-[30px] font-medium block ml-auto xl:text-[32px] "
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default CareerForm;
