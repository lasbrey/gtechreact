import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="relative">
      <Container>

        <div className="text-sm text-center text-gray-600 ">
          Copyright © {new Date().getFullYear()}.
          <a href="/">
            Gtech.
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
      {/* <Backlink /> */}
    </div>
  );
}