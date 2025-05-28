// src/components/FeatureCard.tsx
import React from "react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  button: string;
  image: string;
  bg: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  button,
  image,
  bg,
}) => (
  <div
    className={`flex flex-col justify-between rounded-2xl border border-gray-300 p-4 pt-6 w-full max-w-[500px] min-h-[300px] bg-gradient-to-br ${bg} shadow-md`}
  >
    <div>
      <div className="text-xl font-medium text-[#2d3559] mb-2">{subtitle}</div>
      <div className="text-5xl font-extrabold text-gray-500 mb-1">{title}</div>
    </div>
    <div className="flex flex-col sm:flex-row justify-between ">
      <div>
        <button className="flex items-center gap-2 bg-[#2d2d2d] rounded-full text-white px-6 py-3  text-lg font-semibold shadow hover:bg-[#444] transition">
          {button}
          <span>→</span>
        </button>
      </div>
      <img src={image} alt={title} className="h-40 object-contain " />
    </div>
  </div>
);

export default FeatureCard;
