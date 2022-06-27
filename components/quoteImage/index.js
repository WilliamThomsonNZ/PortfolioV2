import React from "react";
import Image from "next/image";
const QuoteImage = () => {
  return (
    <section style={{ display: "none" }}>
      <Image
        src={"/quote.jpg"}
        alt={"desk"}
        width={800}
        height={1200}
        objectFit={"cover"}
      />
    </section>
  );
};

export default QuoteImage;
