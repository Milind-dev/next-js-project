import React from "react";
import Candles from "../../../public/logos/candles.jpg";
// import AiSummit from "../../../public/logos/aisummit.jpg";

import ResourceCard from "../Resources/ResourceCard/Page";
const resources = [
  {
    id: 1,
    image: Candles,
    title: "What is Shadow AI and how to prevent this threat in AI Security",
    description:
      "Shadow risk means hidden risks that are not easy to see at first. In trading or finance, these risks come from unclear data, complex systems, or activities that are not properly monitored. If people ignore shadow risk, it can suddenly cause financial losses, problems with rules, and instability in the market.",
  },
  {
    id: 2,
    image: Candles,
    title: "What is Shadow AI and how to prevent this threat in AI Security",
    description:
      "Shadow risk means hidden risks that are not easy to see at first. In trading or finance, these risks come from unclear data, complex systems, or activities that are not properly monitored. If people ignore shadow risk, it can suddenly cause financial losses, problems with rules, and instability in the market.",
  },
  {
    id: 3,
    image: Candles,
    title: "What is Shadow AI and how to prevent this threat in AI Security",
    description:
      "Shadow risk means hidden risks that are not easy to see at first. In trading or finance, these risks come from unclear data, complex systems, or activities that are not properly monitored. If people ignore shadow risk, it can suddenly cause financial losses, problems with rules, and instability in the market.",
  },
];

export default function Resources() {
  return (
    <section className="py-10 bg-[#063c39]  ">
      <div className="max-w-6xl mx-auto   grid md:grid-cols-3 gap-2  ">
        {resources.map((item) => (
          <ResourceCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
