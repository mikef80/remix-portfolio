import { Form, useActionData, useNavigation } from "@remix-run/react";
import Content from "./Content";
import { useEffect, useRef, useState } from "react";

type ActionData = {
  error?: string;
  success?: string;
  ok?: boolean;
};

const Contact = () => {
  const navigation = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = navigation.state === "submitting";
  const [displayMessage, setDisplayMessage] = useState(false);
  const [displayForm, setDisplayForm] = useState(true);
  const [formHeight, setFormHeight] = useState(0);

  const actionData = useActionData<ActionData>();

  // on submission of form, reset and hide the form
  // optionally, show success message
  useEffect(() => {
    setDisplayMessage(true);

    if (actionData?.ok) {
      setDisplayForm(false);
      formRef.current?.reset();
    }

    setTimeout(() => {
      setDisplayMessage(false);
    }, 3000);
  }, [actionData]);

  // on page load, set height of form submission confirmation message
  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current?.offsetHeight);
    }
  }, []);

  return (
    <div
      id="contact-me"
      className="scroll-mt-[5rem] bg-gray-800 text-white p-6"
    >
      <Content>
        <h1 className="text-3xl pb-4">Contact Me</h1>

        <div className="form-container md:w-3/4 lg:w-1/2 mx-auto">
          <p className="pb-6">
            If you like to get in touch, please feel free to send me a message.
          </p>

          {displayForm && (
            <>
              {actionData?.error && displayMessage && (
                <p className="text-red-500">{actionData.error}</p>
              )}
              {/* {actionData?.success && displayMessage && (
              <p className="text-green-500">{actionData.success}</p>
            )} */}
              <Form
                ref={formRef}
                method="post"
                className="flex flex-col gap-2 items-center self-center w-full h-full"
              >
                <div className="gap-1 flex flex-col w-full">
                  <label className="text-xs" htmlFor="name">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="text-gray-800 p-1 rounded"
                    autoComplete="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="gap-1 flex flex-col w-full">
                  <label className="text-xs" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="text-gray-800 p-1 rounded"
                    autoComplete="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="gap-1 flex flex-col w-full">
                  <label className="text-xs" htmlFor="message">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="text-gray-800 p-1 rounded"
                    placeholder="Message"
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
            </>
          )}

          {!displayForm && (
            <div
              className={`min-h-[${formHeight}px] flex flex-col justify-center`}
            >
              {/* {actionData?.success && displayMessage && (
                <p className="text-green-500">{actionData.success}</p>
              )} */}
              <p className="text-center text-xl my-5">
                Thank you for your message.
              </p>
            </div>
          )}
        </div>
      </Content>
    </div>
  );
};

export default Contact;
