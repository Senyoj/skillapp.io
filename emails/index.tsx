import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";
  import { getFirestore, doc, getDoc } from "firebase-admin/firestore";
  import admin from "firebase-admin";
  
  // Initialize Firebase Admin SDK
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  }
  
  const db = getFirestore();
  
  interface SkillLearnSubscriptionEmailProps {
    username?: string;
    userImage?: string;
    betaLink?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  const logoUrl = `${process.env.BASE_URL || "http://localhost:5173/"}/assets/logo.png`;
  
  export const SkillLearnSubscriptionEmail = ({
    username,
    userImage,
    betaLink,
  }: SkillLearnSubscriptionEmailProps) => {
    const previewText = `Welcome to Skill Learn Beta, ${username}!`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
              <Section className="mt-[32px] text-center">
                <Img
                  src={`${logoUrl}`}
                  width="40"
                  height="37"
                  alt="Skill Learn"
                  className="my-0 mx-auto"
                />
              </Section>
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                Welcome to <strong>Skillapp Beta</strong>!
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                Hi {username ? username : "there"},
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                Thank you for joining our beta program. We’re excited to have you
                on board and can’t wait for you to start learning and growing with
                us!
              </Text>
              <Text className="text-black text-[14px] leading-[24px] mt-4">
                As a beta user, you’ll be among the first to experience Skill
                Learn’s powerful features, including personalized skill paths,
                curated content, and a supportive community. We’d love to hear
                your feedback to help make Skill Learn even better.
              </Text>
              <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                  className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                  href={betaLink}
                >
                  Start Exploring
                </Button>
              </Section>
              <Text className="text-black text-[14px] leading-[24px]">
                or copy and paste this URL into your browser:{" "}
                <Link href={betaLink} className="text-blue-600 no-underline">
                  {betaLink}
                </Link>
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                If you didn’t sign up for the Skill Learn beta, you can ignore
                this email. If you have any questions, please reply to this email
                to get in touch with us.
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  // Fetch username from Firestore based on email
  export async function getUserInfo(email: string) {
    try {
      const userDoc = await getDoc(doc(db, "users", email));
      if (userDoc.exists()) {
        return userDoc.data().username;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    return null;
  }
  
  // Usage example
  export async function sendEmailToUser(email: string, betaLink: string) {
    const username = await getUserInfo(email);
    const userImage = `${baseUrl}/static/user-placeholder.png`;
  
    return (
      <SkillLearnSubscriptionEmail
        username={username || "there"}
        userImage={userImage}
        betaLink={betaLink}
      />
    );
  }
  
  SkillLearnSubscriptionEmail.PreviewProps = {
    username: "Joel Senyo",
    userImage: `${baseUrl}/static/user-placeholder.png`,
    betaLink: "https://skill-learn.com/beta/welcome",
  } as SkillLearnSubscriptionEmailProps;
  
  export default SkillLearnSubscriptionEmail;
  