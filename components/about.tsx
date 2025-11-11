import React from "react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-800">
            {/* ===== Hero Section ===== */}
            <section className="flex flex-col items-center justify-center text-center py-20 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-4">
                    Welcome to <span className="text-purple-900">QuizVerse</span>
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-gray-700">
                    The universe of quizzes where learning meets fun.
                    Challenge yourself, explore new topics, and grow your knowledge every day.
                </p>
            </section>

            {/* ===== Mission Section ===== */}
            <section className="max-w-5xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
                    Our Mission
                </h2>
                <p className="text-center text-gray-700 text-lg leading-relaxed">
                    At <strong>QuizVerse</strong>, we believe education should be exciting, engaging,
                    and accessible to everyone. Our mission is to make learning an adventure —
                    one question at a time.
                </p>
            </section>

            {/* ===== Features Section ===== */}
            <section className="bg-purple-50 py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
                    Why Choose QuizVerse?
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "AI-Powered Questions",
                            desc: "Generate adaptive and intelligent quizzes tailored to your skill level.",
                        },
                        {
                            title: "Real-time Leaderboards",
                            desc: "Compete globally and track your ranking live against other learners.",
                        },
                        {
                            title: "Personalized Analytics",
                            desc: "Understand your strengths and weaknesses with smart insights.",
                        },
                        {
                            title: "Gamified Learning",
                            desc: "Earn rewards, badges, and achievements as you progress.",
                        },
                        {
                            title: "Multi-Topic Quizzes",
                            desc: "Access quizzes from tech to general knowledge — all in one platform.",
                        },
                        {
                            title: "Fast & Secure",
                            desc: "Powered by Next.js, ensuring blazing-fast performance and safety.",
                        },
                    ].map((f, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-purple-700 mb-2">{f.title}</h3>
                            <p className="text-gray-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== Team Section ===== */}
            <section className="max-w-6xl mx-auto py-20 px-6">
                <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
                    Meet the Creator
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <img
                        src="/team/avatar.png"
                        alt="Founder"
                        className="w-40 h-40 rounded-full shadow-lg border-4 border-purple-300 object-cover"
                    />
                    <div className="max-w-md text-center md:text-left">
                        <h3 className="text-2xl font-bold text-purple-900 mb-2">
                            Rifat Mohammad Noor
                        </h3>
                        <p className="text-gray-700 mb-3">
                            Founder & Developer of <strong>QuizVerse</strong>.
                            Passionate about building smart, scalable, and impactful web apps.
                        </p>
                        <p className="text-gray-600 italic">
                            “QuizVerse is not just a quiz app — it’s a movement to make learning fun again.”
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== Call to Action ===== */}
            <section className="bg-purple-700 text-white py-16 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Start Your Quiz Journey?
                </h2>
                <p className="text-lg mb-8">
                    Join QuizVerse today and unlock a new way of learning through fun challenges!
                </p>
                <a
                    href="/quiz"
                    className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-100 transition duration-300"
                >
                    Get Started
                </a>
            </section>

            {/* ===== Footer ===== */}
            <footer className="text-center py-6 text-gray-600 text-sm">
                © {new Date().getFullYear()} QuizVerse. All rights reserved.
            </footer>
        </div>
    );
}
