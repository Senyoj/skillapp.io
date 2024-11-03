import { BrainCircuit, Projector, TabletSmartphone } from "lucide-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const features = [
  {
    title: "AI-Powered Career Path Suggestions",
    description:
      "This feature provides personalized career suggestions based on skills assessments, interests, and local job market trends. It can analyze data to recommend not just local career paths but also emerging fields that align with global trends.",
    icon: <BrainCircuit className="scale-125 m-2" />,
    width: "md:col-span-1",
  },
  {
    title: "Community-Based Mentorship Programs",
    description:
      "This feature connects students with local mentors and professionals in their fields of interest through a built-in mentorship program. Users can engage in virtual or in-person mentorship sessions, gaining insights and advice from experienced individuals.",
    width: "md:col-span-2",
  },
  {
    title: "Progress Tracking and Milestone Setting",
    description:
      "A robust tracking system that allows students to set career-related milestones and track their progress. This feature includes visual progress charts and reminders for upcoming deadlines or goals.",
    width: "md:col-span-1",
  },
  {
    title: "Interactive Career Exploration Events",
    description:
      "Host virtual or hybrid career fairs and workshops where students can interact with industry professionals and explore various careers. These events can include Q&A sessions, live demonstrations, and hands-on activities.",
    width: "md:col-span-1",
  },
  {
    title: "Peer Collaboration and Study Groups",
    description:
      "A platform feature that facilitates the creation of peer study groups and collaborative projects. Students can connect with others who share similar interests or career goals, enabling them to learn from each other and work on projects that enhance their skills.",
    width: "md:col-span-1",
  },
  {
    title: "Mobile-First Accessibility",
    description:
      "A mobile-responsive design ensuring that the app is accessible on low-cost smartphones, which are widely used in Ghana. The feature includes offline capabilities, allowing students to complete assessments and access resources without constant internet connectivity.",
    icon: <TabletSmartphone className="scale-125 m-2" />,
    width: "md:col-span-2",
  },
  {
    title: "Localized Educational Resource Hub",
    description:
      "A curated library of educational resources tailored to the Ghanaian education system, including courses, scholarships, internships, and workshops. This hub connects students with local institutions and organizations that offer skill development.",
    icon: <Projector className="scale-125 m-2" />,
    width: "md:col-span-1",
  },
];

const FeatureSection = () => {
  return (
    <BentoGrid>
      {features.map((feature, index) => (
        <BentoGridItem
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          width={feature.width}
        />
      ))}
    </BentoGrid>
  );
};

export default FeatureSection;
