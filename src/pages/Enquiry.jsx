// src/components/Enquiry.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "/Logo_022.png";
import bgImg from "/bg-img.jpg";
import ContactUs from "../components/ContactUs";
import { FaPlus, FaMinus } from "react-icons/fa6";

function Enquiry() {
  const faqs = [
    {
      question: "1. What kind of trips does Rev & Roar specialize in?",
      answer:
        "We specialize in thrilling bike expeditions, comfortable tempo traveler tours, and group adventures to Ladakh and Spiti. Whether you're a solo rider, a family, a corporate team, or a group of college friends, we create trips tailored just for you!",
    },
    {
      question: "2. Do I need prior experience for a bike trip?",
      answer:
        "Not at all! Our bike trips are designed for everyone, from first-timers to seasoned riders. We provide a pre-ride briefing and basic training to ensure you're comfortable and confident before hitting the road.",
    },
    {
      question: "3. What's included in your packages?",
      answer: `Our packages typically include:
• Accommodation
• Meals (Breakfast & Dinner)
• Bike rentals or tempo traveler
• Backup vehicle for emergencies and luggage
• Expert guides and mechanics
• AMS prevention support
• Permits and tolls

For specific details, check out the itinerary of your chosen package.`,
    },
    {
      question:
        "4. What is Acute Mountain Sickness (AMS), and how do you prevent it?",
      answer: `AMS occurs due to reduced oxygen levels at high altitudes. We take several precautions, including:
• Proper acclimatization stops.
• A gradual increase in altitude.
• Continuous monitoring of your health by trained guides.
We also provide medical support if required.`,
    },
    {
      question: "5. What kind of backup support is provided during trips?",
      answer:
        "We ensure a backup vehicle is always present to carry your luggage, provide assistance, and handle emergencies. Our team includes mechanics and first-aid-trained guides to address any issues on the go.",
    },
    {
      question: "6. What is the best time to visit Ladakh and Spiti?",
      answer: `• Ladakh: The ideal time is between May and September, when the roads are open, and the weather is pleasant.
• Spiti: Best visited from June to October for bike trips or tempo tours, as the valleys bloom during these months.`,
    },
    {
      question: "7. What should I pack for a trip to Ladakh or Spiti?",
      answer: `Here's a quick checklist:
• Warm layers, including thermal wear and waterproof jackets.
• Comfortable, sturdy shoes.
• Gloves, woolen socks, and caps.
• Sunglasses and sunscreen for high-altitude sun exposure.
• Personal medicines, including Diamox (for AMS).
• A power bank and camera to capture the magic!

We'll provide a detailed packing guide once you book with us.`,
    },
    {
      question: "8. Do you allow pillion riders on bike trips?",
      answer:
        "Absolutely! If you're not ready to ride solo, you can join as a pillion rider. It's a fantastic way to enjoy the adventure without worrying about handling a bike. (Terms and conditions applied)",
    },
    {
      question: "9. What kind of accommodation can I expect?",
      answer:
        "We offer a mix of cozy hotels, guesthouses, and campsites, depending on the location. Rest assured, we prioritize clean, comfortable, and safe stays to ensure a great experience.",
    },
    {
      question: "10. Can I customize a trip?",
      answer:
        "Yes, we offer fully customizable tours! Whether it's a specific itinerary, a mix of adventure and leisure, or a group size, we'll design the perfect trip for your needs. Just share your preferences with us, and we'll handle the rest.",
    },
    {
      question: "11. Is there any age limit for these trips?",
      answer: `• Bike trips: Riders must be at least 18 years old with a valid driver's license.
• Tempo tours: Perfect for all ages, including families with kids or seniors who prefer a comfortable journey.`,
    },
    {
      question: "12. How do I book a trip?",
      answer: `Booking with us is simple!
1. Browse our packages on the website.
2. Choose your preferred trip.
3. Contact us via phone, email, or WhatsApp to finalize details.
4. Secure your spot with a deposit, and you're all set!`,
    },
    {
      question: "13. What happens if the weather disrupts the trip?",
      answer:
        "Mountain weather can be unpredictable, but your safety is our priority. If weather conditions disrupt the itinerary, we'll adjust the plan to ensure you still have a safe and enjoyable experience.",
    },
    {
      question: "14. What's your cancellation and refund policy?",
      answer: `We understand that plans can change. Our cancellation policy is as follows:
• 30+ days before trip: No refund (but can shift dates)
• 15-30 days: No refund

For more details, please refer to our full terms and conditions.`,
    },
    {
      question: "15. How do you ensure safety during bike trips?",
      answer: `Safety is non-negotiable at Rev & Roar. Here's how we ensure it:
• Pre-trip bike checks and basic training.
• Mandatory safety gear (helmet, gloves, etc.).
• Experienced guides and mechanics.
• Backup vehicle for emergencies.
• Strict adherence to AMS prevention guidelines.`,
    },
    {
      question: "16. Can I bring my own bike for a bike trip?",
      answer:
        "Of course! If you're comfortable riding your own bike, feel free to bring it along. We'll assist with servicing and ensure your bike is road-ready for the journey.",
    },
    {
      question: "17. What kind of group sizes do you manage?",
      answer: `We cater to all group sizes:
• Small, intimate trips for solo riders or friends.
• Larger groups for colleges, corporates, or families.
No group is too big or small—we make it work!`,
    },
    {
      question: "18. Do you provide travel insurance?",
      answer:
        "While we don't provide travel insurance directly, we highly recommend purchasing one before your trip. It should cover high-altitude travel, medical emergencies, and trip cancellations.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="relative w-full h-full bg-cover bg-center pt-16 md:pt-20"
      style={{
        backgroundImage: `url(${bgImg})`,
        fontFamily: "'Varietta Variable', sans-serif",
      }}
    >
      {/* Header with Animated "ENQUIRY" and Logo */}
      <div
        className="flex items-center justify-center p-4 md:p-10 lg:p-15"
        style={{ fontFamily: "'Varietta Variable', sans-serif" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-9xl"
          initial={{ clipPath: "inset(0 100% 0 100%)", opacity: 0, x: -100 }}
          animate={{ clipPath: "inset(0 0 0 0)", opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          ENQUIRY
        </motion.h1>
        <motion.img
          className="h-16 md:h-32 lg:h-50 -ml-2 md:-ml-4"
          src={logo}
          alt="Logo"
          initial={{ clipPath: "inset(0 100% 0 100%)", opacity: 0, x: 100 }}
          animate={{ clipPath: "inset(0 0 0 0)", opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* FAQs Section */}
      <div id="faqs" className="p-4 md:p-10 lg:p-20">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 md:mb-8">
            <div
              className="flex justify-between items-center cursor-pointer bg-opacity-10 p-3 rounded-md"
              onClick={() => handleToggle(index)}
            >
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold pr-2">
                {faq.question}
              </h2>
              {activeIndex === index ? (
                <FaMinus className="text-2xl flex-shrink-0" />
              ) : (
                <FaPlus className="text-2xl flex-shrink-0" />
              )}
            </div>
            <div
              className={`transition-all duration-300 ease-in-out transform ${
                activeIndex === index
                  ? "opacity-100 translate-y-0 h-auto mt-2 p-3 bg-opacity-20 rounded-md"
                  : "opacity-0 -translate-y-4 h-0 overflow-hidden"
              }`}
            >
              <p className="whitespace-pre-line mr-30 pr-20 text-base md:text-xl lg:text-2xl">
                {faq.answer.split("\n").map((line, i) => (
                  <span
                    key={i}
                    className={`block mb-1 ${
                      line.trim().startsWith("•") ? "pl-4" : ""
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ContactUs />
    </div>
  );
}

export default Enquiry;
