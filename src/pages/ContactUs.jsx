import { SimpleNavBar } from "../components";
import Footer from "../components/Shared/Footer";
import StarsBackground from "../components/Shared/StarsBackground";

const ContactUs = () => {
  return (
    <div className="ga-black scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-purple/900 scrollbar flex min-h-screen flex-col justify-between gap-12">
      <StarsBackground />

      <div>
        <SimpleNavBar />
      </div>

      <div className="border-ga-gray-darker/50 mx-auto max-w-lg border p-8 shadow-md">
        <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
        <p className="mb-4">
          We're excited to hear from you! If you have any questions,
          suggestions, or just want to say hi, feel free to drop us a message
          using the form below.
        </p>
        <form className="flex flex-col gap-2">
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border-ga-gray-darker/50 w-full rounded border p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-ga-gray-darker/50 w-full rounded border p-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="border-ga-gray-darker/50 w-full rounded border  p-2"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-ga-purple-default text-ga-white-default w-full rounded px-4 py-2 font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
