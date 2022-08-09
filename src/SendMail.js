import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./SendMail.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required!</p>
        )}
        <input
          name="message"
          placeholder="Message"
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required!</p>
        )}
        <div className="sendMail__options">
          <Button type="submit" className="sendMail__send">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
