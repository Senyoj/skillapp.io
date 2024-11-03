import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import FeatureSection from "../components/FeatureSection";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import Subcription from "../components/Subcription";
import { useRef } from "react";

const Home = () => {
  const discover = `Discover Your Career Path`;
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com" },
    { icon: <FaTwitter />, url: "https://www.twitter.com" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
    { icon: <FaInstagram />, url: "https://www.instagram.com" },
  ];

  const pricingPackages = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Personalized career roadmap",
        "Access to community forums",
        "Email support for basic queries",
        "Basic skill assessment quizzes",
        "Weekly career insights newsletter",
      ],
    },
    {
      name: "Pro",
      price: "$5/month",
      features: [
        "All Basic features",
        "1-on-1 mentorship sessions",
        "Access to premium educational resources",
        "Priority support",
        "Detailed career personality and skill assessments",
        "Access to career-specific webinars and workshops",
        "Personalized goal-setting and progress tracking",
        "AI-driven job and internship recommendations",
        "Exclusive community groups for specific industries",
        "Weekly career insights newsletter",
      ],
    },
    {
      name: "Enterprise",
      price: "$7/month",
      features: [
        "All Pro features",
        "Custom skill-building workshops tailored to chosen career paths",
        "Dedicated career advisor support with quarterly check-ins",
        "Progress analytics and detailed reports on career milestones",
        "Advanced analytics for skill development and goal achievement",
        "Company-specific mock interviews and resume reviews",
        "Access to invite-only networking events and job fairs",
        "Personalized action plan with monthly updates",
        "Access to exclusive project and collaboration opportunities",
        "Early access to new features and resources",
      ],
    },
  ];

  return (
    <div className="font-sans">
      <div className="w-full bg-white bg-opacity-45 backdrop-blur-2xl ">
        <Navbar />
      </div>
      <motion.div
        id="home"
        className="p-5 md:mx-12 lg:mx-44 pt-20 lg:h-[620px] flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full flex flex-col md:items-start justify-center text-start">
          <h1 className="heading-1">Find Your Career Path</h1>
          <p className="text-sm text-center md:text-start text-gray-600 max-w-xl mb-8">
            Assess your skills and interests to explore suitable career paths.
            Let our AI guide you to the future you deserve.
          </p>
        </div>
        <div className="flex justify-center w-full">
          <motion.img
            src="/hero.svg"
            alt="Hero image"
            className="w-full h-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      <motion.div
        id="features"
        className="md:mx-12 lg:mx-44 p-5 text-center md:text-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TextGenerateEffect duration={1} filter={true} words={discover} />
        <p className="text-sm text-gray-600 mb-8">
          Skillapp is an AI-powered platform focused on guiding users to
          fulfilling career paths based on their unique skills and interests.
        </p>
        <FeatureSection />
      </motion.div>

      <motion.div
        id="pricing"
        className="md:mx-12 lg:mx-44 p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="heading-1">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPackages.map((packageItem, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 bg-white text-start flex flex-col justify-between"
            >
              <div>
                <h3 className="heading-2">{packageItem.name}</h3>
                <p className="text-md font-semibold mb-4">
                  {packageItem.price}
                </p>
                <ul className="text-left mb-4 text-sm">
                  {packageItem.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600">
                      - {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="w-full font-semibold transition-colors">
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </motion.div>

      <div id="subscribe" className="md:mx-12 lg:mx-44 p-5">
        <Subcription />
      </div>

      <div className="md:mx-12 lg:mx-44 p-5">
        <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-10 rounded-sm">
          <div className="md:mx-12 lg:mx-44 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-5 md:mb-0">
              <h3 className="heading-2">Skillapp</h3>
              <p className="text-sm">Your AI Career Guidance Application</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center mt-5 text-sm">
            &copy; {new Date().getFullYear()} Skillapp. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
