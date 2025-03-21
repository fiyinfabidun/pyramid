/* eslint-disable no-unused-vars */
import * as React from "react";
import { motion } from "framer-motion";

const SvgComponent = (props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={105}
      height={14}
      fill="none"
      viewBox="0 0 105 14"
      {...props}
    >
      {/* White Outline Animation */}
      <motion.path
d="M0 13.807V.187h5.517c1.061 0 1.965.197 2.711.591.747.39 1.316.933 1.707 1.63.396.691.595 1.49.595 2.394 0 .904-.2 1.703-.601 2.394-.401.692-.981 1.23-1.742 1.616-.755.386-1.67.579-2.745.579H1.926V7.083h3.038c.57 0 1.038-.095 1.407-.286.373-.195.65-.463.833-.805.187-.345.28-.742.28-1.19 0-.452-.093-.847-.28-1.184a1.847 1.847 0 0 0-.833-.791c-.373-.191-.847-.286-1.42-.286H2.957v11.266H0ZM11.63.186h3.312l3.19 5.866h.136L21.457.186h3.312l-5.101 8.806v4.815h-2.936V8.992L11.63.186ZM26.384 13.807V.187H31.9c1.056 0 1.957.183 2.704.551.751.364 1.323.88 1.714 1.55.396.665.594 1.448.594 2.348 0 .904-.2 1.682-.6 2.334-.402.647-.982 1.144-1.742 1.49-.756.346-1.67.519-2.745.519h-3.694V6.664h3.216c.564 0 1.033-.075 1.407-.226.373-.15.65-.377.833-.678.186-.302.28-.677.28-1.124 0-.453-.094-.834-.28-1.144-.182-.31-.462-.546-.84-.705-.374-.164-.845-.246-1.414-.246H29.34v11.266h-2.956Zm7.552-6.198 3.475 6.198h-3.264l-3.4-6.198h3.189ZM41.413 13.807h-3.168L43.072.187h3.81l4.822 13.62h-3.169L45.032 3.3h-.11l-3.509 10.508Zm-.198-5.354h7.484v2.248h-7.484V8.453ZM53.387.186h3.646l3.851 9.152h.164L64.9.186h3.646v13.621h-2.868V4.942h-.116l-3.62 8.799H59.99l-3.62-8.833h-.115v8.9h-2.868V.185ZM73.939 3.339v10.468h-2.957V3.34h2.957ZM81.329 13.807H76.37V.187h4.999c1.406 0 2.617.272 3.633.817a5.59 5.59 0 0 1 2.342 2.335c.55 1.015.826 2.23.826 3.644 0 1.42-.275 2.639-.826 3.658a5.601 5.601 0 0 1-2.356 2.348c-1.02.545-2.24.818-3.66.818Zm-2-2.467h1.877c.874 0 1.61-.151 2.206-.453a2.943 2.943 0 0 0 1.352-1.416c.305-.643.457-1.472.457-2.488 0-1.006-.152-1.829-.457-2.467-.3-.639-.75-1.109-1.346-1.41-.596-.302-1.331-.452-2.205-.452h-1.885v8.686ZM97.948 4.104c-.055-.537-.29-.954-.704-1.25-.414-.298-.976-.446-1.686-.446-.483 0-.89.066-1.223.2-.332.128-.587.307-.764.538-.173.23-.26.492-.26.785-.009.244.043.456.157.638.118.182.28.34.485.472.205.129.442.242.71.34.269.093.556.172.86.239l1.257.293c.61.133 1.17.31 1.68.532.51.221.951.494 1.325.818.373.323.662.705.867 1.144.209.439.316.942.321 1.51-.005.833-.223 1.556-.656 2.168-.428.607-1.047 1.08-1.857 1.416-.806.333-1.778.499-2.916.499-1.129 0-2.112-.168-2.95-.505-.833-.337-1.484-.836-1.953-1.497-.464-.665-.708-1.487-.73-2.467h2.86c.032.456.167.838.403 1.144.242.301.563.53.963.685.406.15.863.226 1.373.226.5 0 .935-.071 1.304-.213.373-.142.663-.34.867-.592.205-.253.308-.543.308-.871 0-.306-.094-.563-.28-.772-.182-.208-.451-.386-.806-.532a8.35 8.35 0 0 0-1.29-.399l-1.523-.372c-1.18-.28-2.11-.716-2.793-1.31-.683-.595-1.022-1.395-1.018-2.401-.004-.825.221-1.546.676-2.162.46-.616 1.09-1.097 1.892-1.443C93.648.173 94.558 0 95.578 0c1.038 0 1.944.173 2.718.519.778.346 1.384.827 1.816 1.443.433.616.656 1.33.669 2.142h-2.833Z"
        stroke="#F3F3F3"
        strokeWidth="0.8"
        fill="transparent"
        initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 5, ease: "easeInOut" }}
      />

      {/* Orange Outline Animation */}
      <motion.path
        d="M73.939.186v2.379h-2.957V.186h2.957ZM105 11.621V14h-2.957v-2.379H105Z"
        stroke="#F19A21"
        strokeWidth="1"
        fill="transparent"
        initial={{ strokeDasharray: 150, strokeDashoffset: 150 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 8, delay: 0.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default SvgComponent;







const faqs = [
    {
      question: "What services does your architecture firm offer?",
      answer: "Our firm offers a comprehensive range of services including architectural design, urban planning, interior design, sustainable architecture consulting, 3D visualization, and project management from concept to completion."
    },
    {
      question: "How do you charge for your architectural services?",
      answer: "We typically charge based on a percentage of the total construction cost, ranging from 8-15% depending on project complexity. For smaller projects, we may offer hourly rates or fixed-fee packages. We provide detailed fee proposals after our initial consultation."
    },
    {
      question: "What is your design philosophy?",
      answer: "Our design philosophy centers on creating spaces that harmoniously blend functionality, aesthetics, and sustainability. We believe architecture should respond to both human needs and environmental context, while pushing boundaries of innovation and respecting cultural heritage."
    },
    {
      question: "How long does the typical architectural design process take?",
      answer: "The design process timeline varies by project scope. Residential projects typically take 3-6 months for design development, while commercial projects may require 6-12 months. Construction documentation and permitting add additional time. During our initial consultation, we'll provide a customized timeline for your specific project."
    },
    {
      question: "Do you specialize in any particular architectural style?",
      answer: "While we're versatile in various architectural styles, our portfolio showcases strength in contemporary sustainable design, adaptive reuse of historic structures, and biophilic architecture. We prioritize tailoring our approach to each client's vision rather than imposing a signature style."
    },
    {
      question: "What sustainability practices do you incorporate into your designs?",
      answer: "We integrate numerous sustainable practices including passive solar design, energy-efficient systems, water conservation strategies, locally-sourced and eco-friendly materials, green roofs, and smart home technology. Our firm includes LEED-certified professionals who can guide projects toward various sustainability certifications."
    }
  ];