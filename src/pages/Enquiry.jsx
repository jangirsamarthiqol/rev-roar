// src/components/Enquiry.jsx
import React from "react";

function Enquiry() {
  const questions = [
    "1. What kind of trips does Rev & Roar specialize in?",
    "2. Do I need prior experience for a bike trip?",
    "3. What’s included in your packages?",
    "4. What is Acute Mountain Sickness (AMS), and how do you prevent it?",
    "5. What kind of backup support is provided during trips?",
    "6. What is the best time to visit Ladakh and Spiti?",
    "7. What should I pack for a trip to Ladakh or Spiti?",
    "8. Do you allow pillion riders on bike trips?",
    "9. What kind of accommodation can I expect?",
    "10. Can I customize a trip?",
    "11. Is there any age limit for these trips?",
    "12. How do I book a trip?",
    "13. What happens if the weather disrupts the trip?",
    "14. What’s your cancellation and refund policy?",
    "15. How do you ensure safety during bike trips?",
    "16. Can I bring my own bike for a bike trip?",
    "17. What kind of group sizes do you manage?",
    "18. Do you provide travel insurance?",
  ];

  const answers = [
    "We specialize in thrilling bike expeditions, comfortable tempo traveler tours, and group adventures to Ladakh and Spiti. Whether you’re a solo rider, a family, a corporate team, or a group of college friends, we create trips tailored just for you!",
    "Not at all! Our bike trips are designed for everyone, from first-timers to seasoned riders. We provide a pre-ride briefing and basic training to ensure you’re comfortable and confident before hitting the road.",
    `Our packages typically include:
      •	Accommodation
      •	Meals (Breakfast & Dinner)
      •	Bike rentals or tempo traveler
      •	Backup vehicle for emergencies and luggage
      •	Expert guides and mechanics
      •	AMS prevention support
      •	Permits and tolls

For specific details, check out the itinerary of your chosen package.`,
    `AMS occurs due to reduced oxygen levels at high altitudes. We take several precautions, including:
	•	Proper acclimatization stops.
	•	A gradual increase in altitude.
	•	Continuous monitoring of your health by trained guides.
We also provide medical support if required.
`,
    "We ensure a backup vehicle is always present to carry your luggage, provide assistance, and handle emergencies. Our team includes mechanics and first-aid-trained guides to address any issues on the go.",
    `•	Ladakh: The ideal time is between May and September, when the roads are open, and the weather is pleasant.
	•	Spiti: Best visited from June to October for bike trips or tempo tours, as the valleys bloom during these months.
`,
    `Here’s a quick checklist:
	•	Warm layers, including thermal wear and waterproof jackets.
	•	Comfortable, sturdy shoes.
	•	Gloves, woolen socks, and caps.
	•	Sunglasses and sunscreen for high-altitude sun exposure.
	•	Personal medicines, including Diamox (for AMS).
	•	A power bank and camera to capture the magic!

We’ll provide a detailed packing guide once you book with us.
`,
    "Absolutely! If you’re not ready to ride solo, you can join as a pillion rider. It’s a fantastic way to enjoy the adventure without worrying about handling a bike.(Terms and conditions applied)",
    "We offer a mix of cozy hotels, guesthouses, and campsites, depending on the location. Rest assured, we prioritize clean, comfortable, and safe stays to ensure a great experience.",
    "Yes, we offer fully customizable tours! Whether it’s a specific itinerary, a mix of adventure and leisure, or a group size, we’ll design the perfect trip for your needs. Just share your preferences with us, and we’ll handle the rest.",
    `•	Bike trips: Riders must be at least 18 years old with a valid driver’s license.
	•	Tempo tours: Perfect for all ages, including families with kids or seniors who prefer a comfortable journey.
`,
    `Booking with us is simple!
	1.	Browse our packages on the website.
	2.	Choose your preferred trip.
	3.	Contact us via phone, email, or WhatsApp to finalize details.
	4.	Secure your spot with a deposit, and you’re all set!
`,
    "Mountain weather can be unpredictable, but your safety is our priority. If weather conditions disrupt the itinerary, we’ll adjust the plan to ensure you still have a safe and enjoyable experience.",
    `We understand that plans can change. Our cancellation policy is as follows:
	•	30+ days before trip: No refund( but can shift dates)
	•	15-30 days: No refund
For more details, please refer to our full terms and conditions.
`,
    `Safety is non-negotiable at Rev & Roar. Here’s how we ensure it:
	•	Pre-trip bike checks and basic training.
	•	Mandatory safety gear (helmet, gloves, etc.).
	•	Experienced guides and mechanics.
	•	Backup vehicle for emergencies.
	•	Strict adherence to AMS prevention guidelines.
`,
    "Of course! If you’re comfortable riding your own bike, feel free to bring it along. We’ll assist with servicing and ensure your bike is road-ready for the journey.",
    `We cater to all group sizes:
	•	Small, intimate trips for solo riders or friends.
	•	Larger groups for colleges, corporates, or families.
No group is too big or small—we make it work!
`,

    "While we don’t provide travel insurance directly, we highly recommend purchasing one before your trip. It should cover high-altitude travel, medical emergencies, and trip cancellations.",
  ];

  return (
    <div className="translate-y-15">
      <h1>Enquiry</h1>
    </div>
  );
}

export default Enquiry;
