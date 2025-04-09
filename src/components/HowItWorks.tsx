import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Sodex",
    description:
      "Health and happiness start from a clean home. Experience the best quality hygiene products.",
  },
  {
    icon: <MapIcon />,
    title: "OEKO TEX",
    description:
      "STANDARD 100 by OEKO-TEX® is one of the world’s most recognized labels for textiles tested for harmful substances, representing customer trust and high product safety. Certified by Hohenstein.",
  },
  {
    icon: <PlaneIcon />,
    title: "CTPAT",
    description:
      "QIMA’s CTPAT audit provides a thorough third-party evaluation of your supply chain’s security practices to identify vulnerabilities. It helps secure your supply chain from terrorism, smuggling, and other illicit activities.",
  },
];


export const HowItWorks = () => {
  return (
    <section
      id="certifications"
      className="container text-center py-20 sm:py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Certifications{" "}
        </span>
        
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      <br/>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
