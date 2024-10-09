import { Form, useActionData, useNavigation } from "@remix-run/react";
import Content from "./Content";
import { useEffect, useRef } from "react";

type ActionData = {
  error?: string;
  success?: string;
  ok?: boolean;
};

const Contact = () => {
  const navigation = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = navigation.state === "submitting";

  const actionData = useActionData<ActionData>();

  useEffect(() => {
    if (actionData?.ok) {
      formRef.current?.reset()
    }
  }, [actionData]);

  return (
    <div
      id="contact-me"
      className="scroll-mt-[5rem] bg-gray-800 text-white p-6"
    >
      <Content>
        <h1 className="text-3xl pb-4">Contact Me</h1>
        <p className="pb-2">
          If you like to get in touch, please feel free to send me a message!
        </p>
        {actionData?.error && (
          <p className="text-red-500">{actionData.error}</p>
        )}
        {actionData?.success && (
          <p className="text-green-500">{actionData.success}</p>
        )}
        <Form
          ref={formRef}
          method="post"
          className="flex flex-col gap-2 w-1/3 items-center"
        >
          <div className="gap-2 flex items-center">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="text-gray-800 p-1 rounded"
              autoComplete="name"
              required
            />
          </div>
          <div className="gap-2 flex items-center">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-gray-800 p-1 rounded"
              autoComplete="email"
              required
            />
          </div>
          <div className="gap-2 flex items-center">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              className="text-gray-800 p-1 rounded"
              required
            />
          </div>
          <div className="flex gap-3">
            <button
              type="reset"
              className="bg-red-400 px-3 py-1 rounded hover:bg-red-500 disabled:bg-red-300"
              disabled={isSubmitting}
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-blue-400 px-3 py-1 rounded hover:bg-blue-500 disabled:bg-blue-300"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      </Content>
    </div>
  );
};

export default Contact;