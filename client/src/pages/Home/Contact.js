import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col text-white">
          <p>{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5">
                  <span>{key}</span> : <span>{contact[key]}</span>
                </p>
              )
          )}
          <p>{"}"}</p>
        </div>

        <div className="h-[370px]">
          <lottie-player
            src="https://lottie.host/0ea26eed-c32c-47e3-b41a-0e89ff67b1fb/ozT4VNK64Z.json"
            background="transparent"
            speed="1"
            // controls
            // loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
