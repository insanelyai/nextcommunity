import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Features = () => {
  const Features = [
    {
      key: "01",
      title: "Re-Docs",
      description: "Explained documentation",
      content:
        "Re-docs is a documentation library simplifying the creation and maintenance of API documentation, emphasizing clarity and user-friendly design",
    },
    {
      key: "02",
      title: "Self-Learning",
      description: "Explore blog content for learning",
      content:
        "Community enhances self-learning with features like interactive examples, clear documentation structure, and user-friendly design, facilitating a seamless learning experience.",
    },
    {
      key: "03",
      title: "Online Events",
      description: "Meet, Collaborate, and Share",
      content:
        "Online events offer opportunities to meet, collaborate, and share knowledge, fostering meaningful connections and enriching experiences in a virtual setting.",
    },
  ];

  return (
    <>
      <div className='w-[100%] h-[50vh] flex items-center justify-center'>
        <div className='w-[80%] px-20 grid grid-cols-3 gap-20 justify-center content-center'>
          {Features.map((feature) => (
            <Card
              key={feature.key}
              className='flex flex-col items-start justify-between'>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>{feature.content}</CardContent>
              <CardFooter>
                <p>Learn More</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
