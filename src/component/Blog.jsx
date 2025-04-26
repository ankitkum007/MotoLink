import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Affordable Sedans for 2025",
      excerpt:
        "Looking for an affordable sedan? Check out our top 5 picks for 2025 and what makes them standout!",
      date: "April 1, 2025",
    },
    {
      id: 2,
      title: "How to Use MotoLink's EMI Calculator to Save Money",
      excerpt:
        "Learn how MotoLink's EMI calculator can simplify your financial decisions and save you money.",
      date: "March 28, 2025",
    },
    {
      id: 3,
      title: "5 Must-Know Maintenance Tips for Electric Cars",
      excerpt:
        "Keeping your electric car in top shape has never been easier. Here are 5 essential tips you need to know.",
      date: "March 20, 2025",
    },
  ];

  return (
    <div>
       <div className="max-w-7xl mx-auto relative">
         <Header/>
     </div>
     <div className="bg-gray-100 min-h-screen py-10">
      <header className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">MotoLink Blog</h1>
        <p className="text-lg text-gray-600">
          Stay updated with the latest in the automotive world—vehicle reviews,
          financial tips, maintenance guides, and more!
        </p>
      </header>

      <section className="max-w-4xl mx-auto mt-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{post.date}</p>
              <p className="text-gray-600">{post.excerpt}</p>
              <a
                // href={`/blog/${post.id}`}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 bg-blue-600 py-6">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold">Join the MotoLink Community!</h2>
          <p className="text-lg mt-2">
            Subscribe to our newsletter for the latest updates and exclusive content.
          </p>
          <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200">
            Subscribe Now
          </button>
        </div>
      </footer>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogPage;
