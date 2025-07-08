import type { FormEvent } from "react";

export default function ContactUs() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = new FormData(e.currentTarget);
    console.log("Name : " + form.get("name"));
    console.log("Age : " + form.get("age"));
    console.log("Gender : " + form.get("gender"));
    console.log("Mobile : " + form.get("mobile"));
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-4 w-dvw h-dvh justify-start items-center pt-35 px-10">
      <h1 className="text-3xl py-2 px-3">Contact Us</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-wrap items-center justify-center w-full gap-4"
      >
        <input
          className="w-5/12 bg-gray-700 text-white rounded-lg outline-0 border-0 px-3 py-2 text-xl"
          placeholder="Enter Name"
          name="name"
          type="text"
        />
        <input
          className="w-5/12 bg-gray-700 text-white rounded-lg outline-0 border-0 px-3 py-2 text-xl"
          placeholder="Enter Age"
          name="age"
          type="number"
        />
        <input
          className="w-5/12 bg-gray-700 text-white rounded-lg outline-0 border-0 px-3 py-2 text-xl"
          placeholder="Enter Gender"
          name="gender"
          type="text"
        />
        <input
          className="w-5/12 bg-gray-700 text-white rounded-lg outline-0 border-0 px-3 py-2 text-xl"
          placeholder="Enter Mobile No."
          name="mobile"
          type="number"
        />
        <div className="w-full flex items-center justify-center gap-5 mt-3">
          <button
            className="text-md w-50 cursor-pointer px-4 py-2 bg-blue-700 rounded-sm text-white"
            type="submit"
          >
            Submit
          </button>
          <button
            className="text-md w-50 cursor-pointer px-4 py-2 bg-blue-700 rounded-sm text-white"
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
