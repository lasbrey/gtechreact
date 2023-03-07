import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="relative">
      <Container>
        <footer class="p-4 sm:p-6 ">
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center">
            Copyright © {new Date().getFullYear()}.
              <a href="https://flowbite.com/" class="hover:underline">
              GTECH GLOBAL INTEGRATED
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </Container>

      {/* Do not remove this */}
      {/* <Backlink /> */}
    </div>
  );
}
