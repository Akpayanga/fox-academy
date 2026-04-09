import frontend from "../assets/images/frontend.png";
import backend from "../assets/images/backend.png";
import graphics from "../assets/images/graphics.png";
import project from "../assets/images/project.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Uko Sandra",
    role: "FRONT-END DEVELOPER",
    img: frontend,
  },
  {
    name: "Bamidele Temitope",
    role: "BACK-END DEVELOPER",
    img: backend
  },
  {
    name: "Ibe Nathan",
    role: "GRAPHICS DESIGNER",
    img: graphics
  },
  {
    name: "Asuquo Martha",
    role: "PROJECT MANAGER",
    img: project
  },
];

const extraAvatars = [image1, image2, image3];

export default function CollaborationPhase() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mx-auto max-w-[1440px] shadow-sm my-24">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        {/* Left Section */}
        <div className=" flex flex-col justify-between gap-6">
          {/* Badge */}
          <div>
            <span className="text-xs font-semibold text-[rgba(0,0,0,1)] bg-[rgba(237,237,255,1)]  rounded-full px-5 py-3">
              NEXT STAGE
            </span>

            <h1 className="text-3xl md:text-6xl font-extrabold text-[rgba(17,24,39,1)] mt-4 mb-3 ">
              The Collaboration Phase
            </h1>

            <p className="text-sm md:text-[22px] text-[rgba(107,114,128,1)] md:w-3xl  ">
              Phase 2 introduces real-world cross-functional teamwork. You'll be
              working with designers, engineers, product managers and interns
              from other disciplines to build a production-ready application.
            </p>
          </div>

          {/* CTA Button */}
          <Link to='/progressNew' className="flex items-center justify-center gap-2 bg-[rgba(221,124,30,1)] hover:bg-orange-600 active:scale-95 transition-all text-white font-semibold text-sm rounded-xl py-4 px-6 w-full md:max-w-sm cursor-pointer">
            Enter Phase 2<span className="text-lg">→</span>
          </Link>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-100" />

        {/* Right Section — Your Team */}
        <div className="w-full md:w-90 bg-[rgba(254,243,233,0.5)] rounded-2xl p-5">
          <p className="text-xs font-bold text-[rgba(221,124,30,1)] tracking-widest uppercase mb-4">
            Your Team
          </p>

          <div className="flex flex-col gap-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">
                    {member.name}
                  </p>
                  <p className="text-[10px] text-[rgba(94,94,94,1)] uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}

            {/* Extra Avatars */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex -space-x-2">
                {extraAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="team member"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-xs text-[rgba(221,124,30,1)] font-semibold">
                <a href="#">+16 others</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
