import React from "react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <>
      <div className='w-[100%] h-[calc(100vh-100px)] flex items-center justify-between'>
        <div className='w-[40%] pl-20'>
          <h1 className='text-4xl font-bold'>A Community for Developers</h1>
          <p className='text-md tracking-wide font-medium py-5'>
            The Next.js community is a lively hub for developers using the
            framework. It encourages collaboration, knowledge-sharing, and
            support through forums, social media, and online events. With a
            focus on openness and inclusivity, the community is dedicated to
            advancing modern and scalable web development with Next.js.
          </p>
          <Button className='text-base font-medium' variant='secondary'>
            Explore
            <ArrowUpRight className='px-1' size={30} />
          </Button>
        </div>
        <div className='w-[50%] rounded-md flex items-end'>
          <AspectRatio ratio={16 / 9}>
            <Image
              src='/next-gallery.avif'
              alt='Image'
              width={1920}
              height={1080}
              className='object-cover'
            />
          </AspectRatio>
        </div>
      </div>
    </>
  );
};

export default Banner;
