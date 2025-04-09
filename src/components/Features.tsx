import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/Stricing.png";
import image3 from "../assets/Chicking.png";
import image4 from "../assets/Packing.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "STITCHING AND FINISHING",
    description:
      "We have a fully equipped in-house stitching unit with huge capacities managed by line supervisors and quality controllers monitoring the quality of sewing and finishing constantly so that the buyer parameters are met consistently.",
    image: image,
  },
  {
    title: "INSPECTION & QC",
    description:
      "A raw inspection takes place at the early stage of every process to detect and avoid any possible defect. Employees are trained thoroughly when it comes to inspection standards, to ensure that there is absolutely no compromise on our QC, which happens at almost every stage of production.",
    image: image3,
  },
  {
    title: "PACKAGING",
    description:
      "We have an efficient in-house packaging team working effectively on buyer requirements and standards. The packaging is done with utmost care to ensure the safety and integrity of the products throughout transit.",
    image: image4,
  },
];
const featureList: string[] = [
  "DIGITAL PRINTING",
  "DESIGN STUDIO ",
  "WEAVING",
  "PRINTING UNIT",
  "STITCHING AND FINISHING",
  "EMBROIDERY UNIT",
  "INSPECTION & QC",
  "PACKAGING",
  "STORAGE",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Infrastructure
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader className="p-4 text-center">
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className=" mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
