import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TestSlice} TestSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestSlice>} TestProps
 * @param { TestProps }
 */
const Test = ({ slice }) => {
  console.log("this is the slice from test page", slice);
  return (
    <section>
      <span className="title">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      {slice.primary.description ? (
        <PrismicRichText
          field={slice.primary.description}
          className="description"
        />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
      <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
          color: black;
        }
        .title {
          color: #8592e0;
        }
      `}</style>
    </section>
  );
};

export default Test;
