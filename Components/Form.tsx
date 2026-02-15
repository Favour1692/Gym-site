const Form = () => {
  return (
    <form action="" className="px-4">
      <div className="flex flex-col gap-4 px-4 w-full md:w-[80%] mx-auto">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="">
            Full Name:
          </label>
          <input
            type="text"
            placeholder="Enter full name*"
            id="name"
            autoComplete="on"
            required
            className="py-2 w-full border border-darkblue"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter email address*"
            id="email"
            autoComplete="on"
            required
            className="py-2 w-full border border-darkblue"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="">
            Phone number
          </label>
          <input
            type="tel"
            placeholder="Enter phone number*"
            id="phone"
            autoComplete="on"
            required
            className="py-2 w-full border border-darkblue"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="">
            Message
          </label>
          <textarea
            placeholder="communicate your message..."
            id="message"
            autoComplete="on"
            required
            className="w-full h-auto border border-darkblue"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col place-content-center pt-6">
        <button
          type="submit"
          className="bg-crimson hover:bg-crimson/80 transition-all duration-200 text-fog py-2 px-6 mx-auto"
        >
          Submit form
        </button>
      </div>
    </form>
  );
};

export default Form;
