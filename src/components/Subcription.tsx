import { Button } from "./ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useState } from "react";
import {
  db,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "../config/firebaseConfig";
import { toast } from "../hooks/use-toast";

const Subcription = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const beta = `Join Our Beta Program`;

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const q = query(
      collection(db, "subscriptions"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      toast({
        title: "Oops!",
        description: "This email is already subscribed!",
        status: "error",
      });
      return;
    }

    try {
      await addDoc(collection(db, "subscriptions"), {
        email: email,
        timestamp: new Date(),
      });
      setIsSubscribed(true);
      setEmail("");
      toast({
        title: "Hurray!",
        description:
          "You will be among the first to know when we launch Skillapp",
        status: "success",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Error",
        description: "An error occurred while subscribing. Please try again.",
        status: "error",
      });
    }
  };

  return (
    <div>
      <div className="border p-5 rounded-md flex justify-between items-center relative overflow-hidden">
        <div className="text-center md:text-start">
          <TextGenerateEffect duration={1} filter={true} words={beta} />
          <p className="text-gray-600 mb-4 text-sm">
            Subscribe to be the first to use our application when we launch!
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border rounded-lg p-2 md:mr-2 mb-2 md:mb-0 w-full md:w-2/3"
              required
            />
            <Button type="submit" className="w-full md:w-auto font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="hidden md:flex">
          <img
            src="/cta.svg"
            alt="cta image"
            className="w-96 h-96 absolute top-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Subcription;
