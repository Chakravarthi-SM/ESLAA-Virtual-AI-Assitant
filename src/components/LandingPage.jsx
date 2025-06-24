import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Bot,
  ArrowRight,
  Play,
  Users,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import logo from "../assets/logo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-5 md:px-6 py-2 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mt-1 md:p-4">
            {/* //bg-white/5 backdrop-blur-xl rounded-2xl border-white/10 border */}
            <div
              className="flex
             items-center space-x-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-30"></div>
                <div>
                  {/* <Bot className="w-7 h-7 text-white" /> */}
                  <img src={logo} alt="" className="w-13 h-13" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ESLAA
                </span>
                <div className="text-xs text-gray-400 font-medium">
                  Virtual Assistant
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => navigate("/virtualassitant")}
                className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center cursor-pointer">
                  Launch ESLAA
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-3 pb-32 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center md:px-6 md:py-2 py-0.5 px-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-full border border-cyan-500/20 md:mb-6 mb-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2 md:mr-3"></div>
              <Sparkles className="md:w-4 md:h-4 w-3 h-3 mr-1 md:mr-2 text-cyan-400" />
              <span className="md:text-sm text-[10px] font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Driven by Real TIme AI Intelligence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[45px] md:text-7xl font-black mb-8 leading-none">
              <span className="block text-white">The Future of</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Assistance
              </span>
              <span className="block text-white">is Here</span>
            </h1>

            <p className="text-xsm md:text-xl text-gray-300 md:mb-16 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Meet ESLAA — a virtual assistant that joins your conversations,
              understands your intent, and streams responses instantly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8  mb-6 md:mb-10">
              <button
                onClick={() => navigate("/virtualassitant")}
                className="group relative px-5 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl text-xl font-semibold overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl shadow-cyan-500/25 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  Start Your Journey
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center text-gray-300">
              <Users className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="font-medium">Trusted by millions worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-10 md:p-12 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Experience
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  The ESLAA?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
                Join millions of users who have already transformed their
                productivity with our revolutionary AI assistant
              </p>

              <button
                onClick={() => navigate("/virtualassitant")}
                className="group relative py-4 px-3 min-w-[200px] md:px-12 md:py-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl text-xl font-bold overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl shadow-cyan-500/25 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  Launch ESLAA
                  <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-30"></div>
                <div className="">
                  {/* <Bot className="w-6 h-6 text-white" /> */}
                  <img src={logo} alt="" className="w-13 h-13" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ESLAA
                </span>
                <div className="text-xs text-gray-400">Virtual Assistant</div>
              </div>
            </div>

            <div className="text-gray-400 text-center md:text-right">
              <p className="mb-2">
                © 2025 ESLAA - Virtual Assitant. Shaping the future of
                intelligence.
              </p>
              <p className="text-sm">
                Real time AI Copilot powered by Gemini AI
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
