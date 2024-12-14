import Image from "next/image";
import { socialLinks } from "./config";

const hellos = [
  "Hello",
  "안녕하세요",
  "こんにちは",
  "Hallo",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "Ciao",
  "Olá",
  "Здравствуйте",
  "你好",
  "Merhaba",
  "Szia",
  "Ahoj",
  "Hej",
  "Hei",
  "Moi",
  "Halo",
  "Salam",
  "Shalom",
  "Sveiki",
  "Labas",
  "Sawubona",
  "Salam Alaikum",
  "Tere",
  "Dobrý den",
  "Yassou",
  "Habari",
  "Selamat pagi",
  "Magandang araw",
  "Hallo",
  "Kamusta",
  "God dag",
  "Bula",
  "Kia ora",
  "Hae",
  "Zdravo",
  "Bok",
  "Halló",
  "Sveikas",
  "Salve",
  "Salut",
  "Jambo",
  "Selam",
];

export default function Page() {
  const randomHello = hellos[Math.floor(Math.random() * hellos.length)];
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        {randomHello}.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi! I'm Yunsu Han, and I study Information Sciences at University of Illinois at Urbana-Champaign.
        </p>
        <p>
         This website contains some blog posts of subjects that I'm interested in, such as Artificial Intelligence, 
         web development, Linux distros, and {" "}
          <a
            target="_blank"
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
