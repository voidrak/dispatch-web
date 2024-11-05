import React from "react";
import { useForm } from "@inertiajs/react";
import InputError from "../../utils/InputError";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUs() {
  const { data, setData, post, processing, errors, reset } = useForm({
    full_name: "",
    company_name: "",
    email: "",
    phone_number: "",
    USDOT: "",
    MC: "",
    number_track: "",
    type_track: "",
    mc_authority_paper: null,
    W9: null,
    certificate_of_insurance: null,
    notice_of_assignment: null,
  });

  const submit = (e) => {
    e.preventDefault();

    post("/contact", {
      onSuccess: (response) => {
        toast.success("Form submitted successfully!");
        console.log("Form submitted successfully!");
        reset();
      },
      onError: (error) => {
        toast.error("Error submitting the form !! Try again");
        console.error("There was an error submitting the form:", error);
      },
    });
  };
  return (
    <div id="contact" className="bg-bg-light px-4 py-6">
      <h1 className="mx-auto max-w-screen-lg text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl">
        Get In Touch
      </h1>

      <form
        onSubmit={(e) => {
          submit(e);
        }}
        className="container mx-auto mt-8 flex flex-col rounded-md bg-white px-3 py-8 max-xl:max-w-screen-lg min-[850px]:flex-row lg:py-12 xl:max-w-[1390px] xl:py-16"
      >
        <div className="mx-auto w-full max-w-[500px] px-3 lg:max-w-2xl xl:max-w-3xl">
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="full_name"
              >
                Full Name
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="full_name"
                name="full_name"
                type="text"
                value={data.full_name}
                onChange={(e) => setData("full_name", e.target.value)}
                placeholder="Joe Doe"
              />

              <InputError message={errors.full_name} className="mt-2" />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="company_name"
              >
                Company Name
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="company_name"
                name="company_name"
                type="text"
                value={data.company_name}
                onChange={(e) => setData("company_name", e.target.value)}
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                placeholder="Email Address "
              />
              <InputError message={errors.email} className="mt-2" />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="phone_number"
              >
                Phone Number
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="phone_number"
                name="phone_number"
                type="tel"
                value={data.phone_number}
                onChange={(e) => setData("phone_number", e.target.value)}
                placeholder="+01123456789"
              />
              <InputError message={errors.phone_number} className="mt-2" />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="USDOT"
              >
                USDOT
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="USDOT"
                name="USDOT"
                type="number"
                value={data.USDOT}
                onChange={(e) => setData("USDOT", e.target.value)}
                placeholder="7890123"
              />
            </div>
          </div>

          <div className="-mx-3 mb-2 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="MC"
              >
                MC #
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="MC"
                name="MC"
                type="text"
                value={data.MC}
                onChange={(e) => setData("MC", e.target.value)}
                placeholder="123456"
              />
              <InputError message={errors.MC} className="mt-2" />
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="number_track"
              >
                Number of Trucks
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="number_track"
                name="number_track"
                type="number"
                value={data.number_track}
                onChange={(e) => setData("number_track", e.target.value)}
                min="1"
                placeholder="1"
              />
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="type_track"
              >
                Type of Trucks
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="type_track"
                name="type_track"
                type="text"
                value={data.type_track}
                onChange={(e) => setData("type_track", e.target.value)}
                placeholder="type of tracks"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[500px] space-y-8 min-[850px]:max-w-[280px]">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="mc_authority_paper"
            >
              MC Authority Paper
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="mc_authority_paper"
              name="mc_authority_paper"
              type="file"
              onChange={(e) => setData("mc_authority_paper", e.target.files[0])}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="W9"
            >
              W9
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="W9"
              name="W9"
              onChange={(e) => setData("W9", e.target.files[0])}
              type="file"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="certificate_of_insurance "
            >
              Certificate of Insurance
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="certificate_of_insurance"
              name="certificate_of_insurance"
              onChange={(e) =>
                setData("certificate_of_insurance", e.target.files[0])
              }
              type="file"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="notice_of_assignment"
            >
              Notice of Assignment
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="notice_of_assignment"
              name="notice_of_assignment"
              onChange={(e) =>
                setData("notice_of_assignment", e.target.files[0])
              }
              type="file"
            />
          </div>
          <button
            type="submit"
            className="ml-4 translate-y-[15px] rounded-lg bg-blue-700 px-12 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
