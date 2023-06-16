"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      {/* className=" text-5xl py-2 font-extrabold text-transparent bg-clip-text 
      bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600"
      > */}
      {/* <h1 className=" text-lg text-stone-950">Goldie Tiara Portfolio</h1> */}
      <main className=" bg-white px-10 text-stone-900 md:px-20 lg:px-40 dark:bg-slate-900">
        <section className=" min-h-screen">
          {/* <nav className=" py-10 mb-12 flex-row justify-end align-middle min-w-full"> */}
          <nav className=" flex justify-between py-5 mb-12">
            <h1 className=" text-xl font-semibold">developedbyodi</h1>
            <ul className=" flex justify-between items-center gap-3">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl text-stone-900"
                />
              </li>
              <li>
                <a
                  className=" odi-bg-blue py-2 px-3 rounded-xl text-white cursor-pointer text-sm"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10 py-10">
            <h2 className=" text-5xl py-2 font-extrabold md:text-6xl">
              Goldie Tiara Putri
            </h2>
            <h3 className=" text-xl py-2 ">
              Front-End Developer and Graphic Designer
            </h3>
            <p className=" font-light leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Passionate in creating a visualy appealing design! and likes to
              code (Front-End)
            </p>
            <p></p>
          </div>
          <div className=" flex justify-center align-middle">
            <BsLinkedin className=" text-blue-600 text-2xl" />
          </div>

          <div className="relative odi-bg-yellow rounded-full w-80 h-80 mt-20 mx-auto"></div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-3 mt-5">Services I Offer</h3>
            <p className=" py-2 font-light leading-8 text-gray-800 text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              doloremque rerum{" "}
              <span className=" odi-t-magenta font-normal">
                cupiditate recusandae
              </span>{" "}
              suscipit, libero quisquam repudiandae vitae ipsa facere commodi
              autem architecto hic ducimus sapiente, nemo, quia enim quidem.
            </p>
            <p className=" py-2 font-light leading-8 text-gray-800 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="text-lg py-1"> Service 1</h3>
              <p className="py-2 font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
              </p>
              <h4 className="py-4 odi-t-green"> Tools that I use</h4>
              <p className="py-1 font-light"> wawa</p>
              <p className="py-1 font-light"> wawa</p>
              <p className="py-1 font-light"> wawa</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="text-lg py-1"> Service 1</h3>
              <p className="py-2 font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
              </p>
              <h4 className="py-4 odi-t-green"> Tools that I use</h4>
              <p className="py-1 font-light"> wawa</p>
              <p className="py-1 font-light"> wawa</p>
              <p className="py-1 font-light"> wawa</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="text-lg py-1"> Service 1</h3>
              <p className="py-2 font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
              </p>
              <h4 className="py-4 odi-t-green"> Tools that I use</h4>
              <p className="py-1 font-light"> wawa</p>
              <p className="py-1 font-light"> wawa</p>
              <p className="py-1 font-light"> wawa</p>
            </div>
          </div>
          <div className=" mb-32">
            <h3 className="text-3xl py-3 mt-5">Portfolio</h3>
            <p className=" py-2 font-light leading-8 text-gray-800 text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              doloremque rerum{" "}
              <span className=" odi-t-magenta font-normal">
                cupiditate recusandae
              </span>{" "}
              suscipit, libero quisquam repudiandae vitae ipsa facere commodi
              autem architecto hic ducimus sapiente, nemo, quia enim quidem.
            </p>
            <p className=" py-2 font-light leading-8 text-gray-800 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
