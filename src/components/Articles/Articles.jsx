import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Articles = () => {
  const Articles = [
    {
      key: "01",
      title: "How to build a Next.js app",
      description: "How to build a Next.js app",
      image: "/Medium.webp",
      url: "https://nextjs.org/docs/getting-started",
    },
    {
      key: "02",
      title: "How to build a Next.js app",
      description: "How to build a Next.js app",
      image: "/Netlify.png",
      url: "https://nextjs.org/docs/getting-started",
    },
    {
      key: "03",
      title: "How to build a Next.js app",
      description: "How to build a Next.js app",
      image: "/Stories.png",
      url: "https://nextjs.org/docs/getting-started",
    },
  ];
  return (
    <>
      <div className='w-[100%] h-[70vh]  flex flex-col items-center justify-center gap-20'>
        <h1 className=' font-bold text-5xl'>Trending on Community</h1>
        <div className='w-[80%] px-20 grid grid-cols-3 gap-20 justify-center content-center'>
          {Articles.map((article) => (
            <Card
              key={article.key}
              className='flex flex-col items-start justify-between'>
              <div className='my-2'>
                <CardContent>
                  <div className='w-[350px] h-[200px] object-cover'>
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={350}
                      height={350}
                    />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>

                <CardFooter>
                  <Link href={article.url}>Read More</Link>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
