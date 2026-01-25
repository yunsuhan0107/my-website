"use client"

import Image from "next/image";
import { socialLinks } from "./config";
import {useState, useEffect } from "react";
import Typical from "react-typical";

const hellos = [
  { text: "Hello", language: "English" },
  { text: "안녕하세요", language: "Korean" },
  { text: "こんにちは", language: "Japanese" },
  { text: "Hallo", language: "German" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "Hola", language: "Spanish" },
  { text: "Bonjour", language: "French" },
  { text: "Ciao", language: "Italian" },
  { text: "Olá", language: "Portuguese" },
  { text: "Здравствуйте", language: "Russian" },
  { text: "你好", language: "Chinese" },
  { text: "Merhaba", language: "Turkish" },
  { text: "Szia", language: "Hungarian" },
  { text: "Ahoj", language: "Czech" },
  { text: "Hej", language: "Swedish" },
  { text: "Hei", language: "Norwegian" },
  { text: "Moi", language: "Finnish" },
  { text: "Halo", language: "Indonesian" },
  { text: "Salam", language: "Persian/Arabic" },
  { text: "Shalom", language: "Hebrew" },
  { text: "Sveiki", language: "Latvian" },
  { text: "Labas", language: "Lithuanian" },
  { text: "Sawubona", language: "Zulu" },
  { text: "Salam Alaikum", language: "Arabic" },
  { text: "Tere", language: "Estonian" },
  { text: "Dobrý den", language: "Czech" },
  { text: "Yassou", language: "Greek" },
  { text: "Habari", language: "Swahili" },
  { text: "Selamat pagi", language: "Malay" },
  { text: "Magandang araw", language: "Filipino" },
  { text: "Kamusta", language: "Tagalog" },
  { text: "God dag", language: "Danish" },
  { text: "Bula", language: "Fijian" },
  { text: "Kia ora", language: "Māori" },
  { text: "Hae", language: "Welsh" },
  { text: "Zdravo", language: "Serbian" },
  { text: "Bok", language: "Croatian" },
  { text: "Halló", language: "Icelandic" },
  { text: "Sveikas", language: "Lithuanian" },
  { text: "Salve", language: "Latin" },
  { text: "Salut", language: "Romanian" },
  { text: "Jambo", language: "Swahili" },
  { text: "Selam", language: "Amharic" },
];

export default function Page() {
  const [randomHello, setRandomHello] = useState<{ text: string; language: string } | null>(null);

  useEffect(() => {
  const random = hellos[Math.floor(Math.random() * hellos.length)];
  setRandomHello(random);
}, []);
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/IMG_8070.jpeg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-2 text-2xl font-medium tracking-tight">
        {randomHello && (
          <Typical
            steps={[randomHello.text, 2000]}
            loop={1}
            wrapper="span"
          />
        )}
      </h1>
      
      {randomHello && randomHello.language !== "English" && (
        <p className="text-sm text-gray-500 mb-8">
          <Typical
            steps={[`It means "Hi" in ${randomHello.language}.`, 2000]}
            loop={1}
            wrapper="span"
          />
        </p>
      )}

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi! I'm Yunsu Han, and I study Information Sciences + Data Science and Statistics at University of Illinois at Urbana-Champaign.
        </p>
        <p>
         This website contains some blog posts of subjects that I'm interested in, such as Artificial Intelligence, 
         web development, Linux distros, and {" "}
          <a
            href="/blog"
          >
            more
          </a>
          .
        </p>
        <p>
          The website also contains several projects that I have done so far, including current progress for ongoing projects at the moment.
        </p>
        <p>
          Feel free to read through my posts and send me an {" "}
          <a
            target="_blank"
            href="mailto: yunsuhan00107@gmail.com"
          >
             email 
          </a>
          {" "}if you have any questions or feedbacks.
        </p>
        
      </div>
    </section>
  );
}
