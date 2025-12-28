import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i = 1) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.3,
        type: "spring",
        duration: 1.8,
        bounce: 0,
      },
      opacity: {
        delay: i * 0.3,
        duration: 0.01,
      },
    },
  }),
};

export default function Intro() {
  return (
    <div className="intro-container">
      <motion.svg
        width="540"
        height="291"
        viewBox="0 0 540 291"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.g id="davyd">
          {/* Linha */}
          <motion.path
            d="M20.499 288L537.499 140.5"
            stroke="#f2f2f2"
            strokeWidth="5"
            strokeLinecap="round"
            variants={draw}
            custom={0}
          />

          {/* D */}
          <motion.path
            d="M105.681 114C88.4249 149.251 80.8899 170.639 73.6814 213.5M34.1814 151C4.18066 155.501 -3.81942 141.001 10.1814 128C24.1822 114.999 58.6823 97.499 98.6814 97.5C138.68 97.501 178.636 131.779 158.181 165.5C137.727 199.221 125.181 203.501 120.181 210M120.181 210C74.5841 238.218 55.8597 246.468 27.1814 256M120.181 210C144.358 195.684 156.857 186.82 176.681 169"
            stroke="#f2f2f2"
            strokeWidth="7"
            strokeLinecap="round"
            variants={draw}
            custom={1}
          />

          {/* A */}
          <motion.path
            d="M245.555 131.421C226.555 169.421 212.693 170.921 211.555 159.421C210.417 147.921 212.693 140.921 212.693 140.921M212.693 140.921C216.889 133.492 220.627 125.963 223.055 119.422C229.475 102.125 216.046 98.6015 202.055 110.422C188.064 122.243 175.557 153.739 176.555 166.922C177.553 180.106 183.055 182.922 192.055 171.922C197.652 165.082 205.792 153.136 212.693 140.921Z"
            stroke="#f2f2f2"
            strokeWidth="7"
            strokeLinecap="round"
            variants={draw}
            custom={2}
          />

          {/* V */}
          <motion.path
            d="M248.353 97.5C243.456 124.671 245.818 158.5 248.353 162C248.818 162.5 267.408 125.622 279.854 97.5"
            stroke="#f2f2f2"
            strokeWidth="7"
            strokeLinecap="round"
            variants={draw}
            custom={3}
          />

          {/* Y */}
          <motion.path
            d="M280.205 81.5C277.701 91.7366 282.207 96.5 288.205 94.5C294.204 92.5 311.829 78.0283 311.205 71.5C302.742 100.693 290.931 130.962 298.205 146C305.48 161.038 351.107 64.5371 349.705 64.5C336.663 108.44 329.834 133.029 321.485 176.5M317.705 191.5L321.485 176.5M353.205 137C337.092 149.149 330.411 158.038 321.485 176.5"
            stroke="#f2f2f2"
            strokeWidth="7"
            strokeLinecap="round"
            variants={draw}
            custom={4}
          />

          {/* D final */}
          <motion.path
            d="M448.12 20C428.054 57.7223 421.505 80.2646 415.12 122M377.12 57C346.839 59.05 339.91 56.0246 347.12 42.5C370.594 16.1158 411.619 3.5 443.12 3.5C474.621 3.5 506.62 21.501 506.62 48.5C506.62 75.499 489.107 97.6405 462.12 115L369.12 162"
            stroke="#f2f2f2"
            strokeWidth="7"
            strokeLinecap="round"
            variants={draw}
            custom={5}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
