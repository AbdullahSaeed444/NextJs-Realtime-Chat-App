"use client";

export default function ForumsPage() {
  const topics = [
    { name: "JavaScript", description: "Discuss JavaScript concepts, frameworks, and best practices." },
    { name: "Python", description: "Talk about Python programming, data science, and automation." },
    { name: "Java", description: "Explore Java for backend, Android, and enterprise applications." },
    { name: "C++", description: "Share tips on C++ development, performance, and algorithms." },
    { name: "Go", description: "Discuss Go for microservices and system programming." },
    { name: "Rust", description: "Learn and share Rust concepts for safety and performance." },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Programming Forums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between border border-gray-200"
          >
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{topic.name}</h2>
              <p className="text-gray-600 mb-4">{topic.description}</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Discussions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
