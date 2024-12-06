import { Star } from "lucide-react";
import instructor from "../../../../assets/avatar/avatar5.jpg";
import facebook from "../../../../assets/icons/Facebook.svg";
import instagram from "../../../../assets/icons/Instagram.svg";
import linkedin from "../../../../assets/icons/Linkedin.svg";
import twitter from "../../../../assets/icons/Twitter.svg";
import graduation from "../../../../assets/icons/graduation.svg";
import play from "../../../../assets/icons/play.svg";

export default function Instructor() {
  return (
    <div className="min-h-screen text-black">
      {/* Navigation */}

      {/* Profile Section */}
      <div className="max-w-5xl mx-auto ">
        <div className="flex flex-col md:flex-row items-start gap-[10px] py-3 px-3 rounded">
          <div className="w-48 h-48 overflow-hidden flex-shrink-0">
            <img
              src={`${instructor}`}
              alt="Instructor profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-2">Lily Alcelus</h1>
            <p className="text-emerald-400 mb-4">Software Engineer</p>

            {/* Social Links */}
            <div className="flex gap-3 mb-4">
              {[facebook, instagram, linkedin, twitter].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-7 h-7  flex items-center justify-center text-red-500"
                >
                  <img
                    src={`${social}`}
                    alt={`${social} icon`}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-6 mb-8">
              <div className="flex items-center gap-2">
                <img
                  src={`${graduation}`}
                  alt="Students icon"
                  className="w-6 h-6"
                />
                <span className=" text-[16px] text-nowrap">1200 students</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={`${play}`} alt="Courses icon" className="w-6 h-6" />
                <span className=" text-[16px] text-nowrap">12 courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <span>4.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">About an instructor</h2>
        <p className="text-gray-700 mb-4">
          Lily Alcelus is a skilled web developer and JavaScript instructor with
          over 10 years of industry experiences. Specializing in JavaScript,
          HTML, CSS, and popular frameworks like React and Vue, they've worked
          on projects for KBZ Known for their clear, supportive teaching style.
        </p>
        <p className="text-gray-700">
          Lily Alcelus is dedicated to helping beginners gain confidence and
          practical coding skills through hands-on lessons and real-world
          projects.
        </p>
      </div>
    </div>
  );
}
