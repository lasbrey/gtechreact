import React from "react";
import { HomeIcon, PhoneIcon, MailIcon } from "@heroicons/react/outline";
import Container from "./container";

function ContactGrid() {
  return (
    <Container className="grid grid-cols-3 gap-4 py-10 text-black">
      <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow-md">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900  inline-flex">
            <HomeIcon className="w-6 h-6 text-red-400" />
            <span className="ml-1">Address</span>
          </h5>
        <p class="mb-3 font-normal text-gray-500 ">
          Suite 1, His Glory Plaza off Ademola Adetokunboh, Wuse 2 Abuja
        </p>
      </div>
      <a href="tel:+234817000844">
        <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow-md cursor-pointer">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900  inline-flex">
            <PhoneIcon className="w-6 h-6 text-red-400" />
            <span className="ml-1">Phone</span>
          </h5>
          <p class="mb-3 font-normal text-gray-500 ">+234-81-700-0844</p>
        </div>
      </a>
      <a href="mailto:Gtech@gtechintegrated.com">
        <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow-md cursor-pointer">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900  inline-flex">
            <MailIcon className="w-6 h-6 text-red-400" />
            <span className="ml-1">Mail</span>
          </h5>
          <p class="mb-3 font-normal text-gray-500 ">
            Gtech@gtechintegrated.com
          </p>
        </div>
      </a>
     
    </Container>
  );
}

export default ContactGrid;
