"use client";

import { useState, useEffect } from "react";
import {
  useServiceDetails,
  WelcomeFormType,
} from "../../providers/ServiceDetailsProvider";
import { useRouter } from "next/navigation";
import { useExtractFirstName } from "../hooks/useExtractFirstName";
import { IoMdLogOut } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import SiteLogo from "../../../public/logos/site-logo.webp";
import SkeletonForm from "./ui/SkeletonForm";

const WelcomeForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [serviceDetails, setServiceDetails] = useState<WelcomeFormType>({
    serviceType: "",
    serviceLocation: "",
  });

  const router = useRouter();
  const { data: session } = useSession();
  const name = useExtractFirstName() || "User";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setServiceDetails((prevState: WelcomeFormType) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("serviceDetails from WelcomeForm: ", serviceDetails);
  };

  const handleInputChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("serviceType", serviceDetails.serviceType);
    localStorage.setItem("serviceLocation", serviceDetails.serviceLocation);
    console.log(serviceDetails);
    console.log("Checked: ", isChecked);

    if (isChecked) {
      setIsLoading(false);
      router.push("/chat-with-kal");
    } else {
      alert("Please agree to the terms and conditions");
    }
  };

  return (
    <>
      {isLoading ? (
        <SkeletonForm />
      ) : (
        <section className="glow w-full xl:max-w-[30rem] p-8 border-[#64329e] border rounded-3xl">
          <div className="flex justify-center pb-10 pt-4">
            <p
              onClick={() => signOut()}
              className="absolute top-2 right-2 cursor-pointer"
            >
              <IoMdLogOut
                title="Sign Out"
                size={38}
                className="text-purple-100  p-2 hover:text-purple-400 transition-colors duration-200"
              />
            </p>
            <Image
              priority
              src={SiteLogo}
              alt="Site Logo"
              width={500}
              height={500}
              className="rounded-full w-[10rem] h-[8.5rem]"
            />
          </div>
          <div className="w-full flex flex-col">
            <form onSubmit={handleSubmit}>
              <h2 className="text-lg font-bold tracking-wide pt-2">
                Welcome {name}!
              </h2>
              <article>
                <p>
                  Please fill in the following details so that I can give you
                  the best customer service experience.
                </p>
              </article>
              <div className="my-6 w-full space-y-6">
                <div className="w-full flex flex-col gap-1">
                  <label className="text-sm">Service Type</label>
                  <input
                    type="text"
                    name="serviceType"
                    value={serviceDetails.serviceType}
                    onChange={handleInputChange}
                    aria-label="Service Type"
                    placeholder="technology / shopping / repairs / etc"
                    className="w-full bg-purple-200 text-neutral-950 px-2 py-1 rounded-xl placeholder:text-sm placeholder:italic placeholder:text-neutral-600"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label className="text-sm">
                    Location Where Service Is Needed
                  </label>
                  <input
                    type="text"
                    name="serviceLocation"
                    value={serviceDetails.serviceLocation}
                    onChange={handleInputChange}
                    aria-label="Location Where Service Needed"
                    required
                    placeholder="city / state / country"
                    className="w-full bg-purple-200 text-neutral-950 px-2 py-1 rounded-xl placeholder:text-sm placeholder:italic placeholder:text-neutral-600"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <input
                  type="checkbox"
                  name="terms"
                  onChange={handleInputChecked}
                  aria-label="I agree to the terms and conditions"
                  required
                  className="w-3 h-3 cursor-pointer"
                />
                <p className="text">
                  I have read and I agree with the&nbsp;
                  <a href="#" className="text-[#5dbbfd] underline">
                    terms and conditions
                  </a>
                </p>
              </div>
              <div className="flex justify-center my-4">
                <button
                  disabled={
                    !isChecked ||
                    !serviceDetails.serviceType ||
                    !serviceDetails.serviceLocation
                  }
                  type="submit"
                  className="disabled:opacity-40 w-full max-w-[75%] py-1 button-glow rounded-full"
                >
                  Let&apos;s Go!
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default WelcomeForm;
