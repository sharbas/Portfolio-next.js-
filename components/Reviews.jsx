"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const reviewData = [
  {
    avatar: "/assets/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "lorem ipsum dolor sit amet consecutreur adipisicing elit . quisquam quos quo voluptas tempora delectus dicta",
  },
  {
    avatar: "/assets/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review:
      "lorem ipsum dolor sit amet consecutreur adipisicing elit . quisquam quos quo voluptas tempora delectus dicta",
  },
  {
    avatar: "/assets/reviews/avatar-3.png",
    name: "John Doe",
    job: "Game Dev",
    review:
      "lorem ipsum dolor sit amet consecutreur adipisicing elit . quisquam quos quo voluptas tempora delectus dicta",
  },
  {
    avatar: "/assets/reviews/avatar-4.png",
    name: "Emily Smith",
    job: "Therapist",
    review:
      "lorem ipsum dolor sit amet consecutreur adipisicing elit . quisquam quos quo voluptas tempora delectus dicta",
  },
  {
    avatar: "/assets/reviews/avatar-1.png",
    name: "Oliver Tayler",
    job: "Engineer",
    review:
      "lorem ipsum dolor sit amet consecutreur adipisicing elit . quisquam quos quo voluptas tempora delectus dicta",
  },
  {
    avatar: "/assets/reviews/avatar-1.png",
    name: "Mason Wilson",
    job: "Video Editor",
    review:
      "lorem ipsum dolor sit amet consecutreur adipisicing elit . quisquam quos quo voluptas tempora delectus dicta",
  },
];
function Reviews() {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {reviewData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] ">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4 ">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name  */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground ">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;
