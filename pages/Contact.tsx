import React from "react";

const Contact = () => {
  return (
    <section className="py-10 px-44">
      <div className="flex justify-between items-center w-full gap-x-20">
        <h1 className="text-6xl font-bold leading-snug w-1/2">
          A Teaching Platform with Flexibility, Finally.
        </h1>
        <div className="w-1/2">
          <label>Notify me when it releases:</label>
          <div className="flex gap-x-3">
            <input
              type="text"
              id="email"
              className="px-5 py-4 rounded-sm w-full"
              placeholder="Email Address"
            />
            <input
              type="submit"
              value="Add me"
              className="p-6 rounded-sm bg-[#923ADB]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
