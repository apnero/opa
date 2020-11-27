import colors from "@/assets/crayola.json";

import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";

export default [
  {
    image: image1,
    text: [
      "Vehicle GraphicsTemp",
      "Port Vehicle Graphics",
      "Spanish Vehicle Graphics",
    ],
    color: colors[Math.floor(Math.random() * colors.length)].hex,
  },
  {
    image: image2,
    text: ["Sign Products", "Port Sign Products", "Spanish Sign Products"],
    color: colors[Math.floor(Math.random() * colors.length)].hex,
  },
  {
    image: image1,
    text: [
      "Windows Graphics",
      "Port Windows Graphics",
      "Spanish Windows Graphics",
    ],
    color: colors[Math.floor(Math.random() * colors.length)].hex,
  },
  {
    image: image2,
    text: ["Websites", "Port Websites", "Spanish Websites"],
    color: colors[Math.floor(Math.random() * colors.length)].hex,
  },
  {
    image: image1,
    text: ["Social Media", "Port Social Media", "Spanish Social Media"],
    color: colors[Math.floor(Math.random() * colors.length)].hex,
  },
  {
    image: image2,
    text: ["Business Cards", "Port Business Cards", "Spanish Business Cards"],
    color: colors[Math.floor(Math.random() * colors.length)].hex,
  },
  {
    image: image1,
    text: [
      "Custom T-Shirts",
      "Port Custom T-Shirts",
      "Spanish Custom T-Shirts",
    ],
    color: colors[Math.floor(Math.random() * colors.length)].hex,
  },
  {
    image: image2,
    text: ["Logo", "Port Logo", "Spanish Logo"],
    color: colors[Math.floor(Math.random() * colors.length)].hex,
  },
];
