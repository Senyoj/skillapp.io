import { useState } from "react";
import { Button } from "../../components/ui/button";

interface Question {
  label: string;
  placeholder: string;
  type: string;
  name: string;
}

interface FormData {
  email?: string;
  password?: string;
  fullName?: string;
  phoneNumber?: string;
  occupation?: string;
  reason?: string;
}

const questions: Question[] = [
  {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "Create a password",
    type: "password",
    name: "password",
  },
  {
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    name: "fullName",
  },
  {
    label: "Phone Number",
    placeholder: "Enter your phone number",
    type: "tel",
    name: "phoneNumber",
  },
  {
    label: "What is your current occupation?",
    placeholder: "e.g., Student, Professional, etc.",
    type: "text",
    name: "occupation",
  },
  {
    label: "Why do you want to use this tool?",
    placeholder: "Describe your interest or goal",
    type: "textarea",
    name: "reason",
  },
];

const Register = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-white">
      <form className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform duration-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-600">
          Create Your Account
        </h2>

        {/* Current Question */}
        <div className="mb-4">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            {questions[currentStep].label}
          </label>
          {questions[currentStep].type === "textarea" ? (
            <textarea
              name={questions[currentStep].name}
              value={formData[questions[currentStep].name] || ""}
              onChange={handleChange}
              required
              className="bg-transparent w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
              placeholder={questions[currentStep].placeholder}
            />
          ) : (
            <input
              type={questions[currentStep].type}
              name={questions[currentStep].name}
              value={formData[questions[currentStep].name] || ""}
              onChange={handleChange}
              required
              className="bg-transparent w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
              placeholder={questions[currentStep].placeholder}
            />
          )}
        </div>

        <Button
          type="button"
          onClick={handleNext}
          className="w-full py-2 text-white font-semibold rounded-lg bg-gray-600 hover:bg-gray-700 transition duration-200"
        >
          {currentStep < questions.length - 1 ? "Next" : "Submit"}
        </Button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-gray-600 hover:underline font-medium"
          >
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
