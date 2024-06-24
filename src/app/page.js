"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const HomePage = () => {
  const handleClick = async () => {
    let data ={
      name:"kunal",
      role:"coder"
    }

    let a = await fetch("/api/add", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    let red = await a.json()
    console.log(red)
  }
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">


      {/* Hero Section */}
      <div className="flex-1">
        <section className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to MyCompany</h1>
            <p className="text-lg md:text-xl mb-6">We provide exceptional services to help you achieve your goals.</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500">Get Started</button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4"><Link href={'/feature-one'}>Feature One</Link></h3>
                <p>Detailed description of Feature One. Highlight the benefits and unique aspects.</p>
              </div>
              <div>
                <h1>Some api related actions</h1>
                <button onClick={handleClick}>click me</button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Feature Two</h3>
                <p>Detailed description of Feature Two. Highlight the benefits and unique aspects.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Feature Three</h3>
                <p>Detailed description of Feature Three. Highlight the benefits and unique aspects.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

     
    </div>
  );
};

export default HomePage;
