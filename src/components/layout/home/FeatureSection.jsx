import { Award, Crown, Zap } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl dark:text-white dark:text-slate-50 font-black text-gray-900 mb-5">
            Why Choose IdeaVault?
          </h2>
          <p className="text-xl dark:text-slate-300 text-gray-600 max-w-2xl mx-auto">
            Join thousands of innovators transforming ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent dark:border-slate-800 hover:border-orange-500 group">
            <div className="mx-auto w-16 h-16 bg-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h3 className="text-2xl text-center font-black text-gray-900 dark:text-slate-50 mb-3">
              Lightning Fast Feedback
            </h3>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
              Get instant insights from a community of experienced entrepreneurs
              and industry experts who care about your success.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent dark:bg-slate-800 dark:border-slate-800 hover:border-orange-500 group">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-center font-black text-gray-900 dark:text-slate-50 mb-3">
              Premium Network
            </h3>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
              Connect with top-tier founders, investors, and mentors who can
              help turn your vision into a thriving business.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent dark:bg-slate-800 dark:border-slate-800 hover:border-orange-500 group">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-center font-black text-gray-900 dark:text-slate-50 mb-3">
              Proven Success
            </h3>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
              Join a platform with a track record of launching successful
              startups that have raised millions in funding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;
