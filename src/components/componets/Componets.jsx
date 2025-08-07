export const ProjectCard = ({
  img,
  name,
  description,
  link,
  gitLink,
  dataAos,
  techStack,
}) => {
  return (
    <div
      data-aos={dataAos}
      className="bg-white rounded-lg shadow-lg overflow-hidden relative"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover rounded-xl"
      />

      <div className="py-6 px-4">
        <h1 className="text-xl font-bold text-gray-800 mb-3">{name}</h1>
        <p className="text-gray-600 mb-4 h-[100px] text-sm leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {techStack.map((stack, index) => (
            <p
              key={index}
              className="text-xs font-semibold text-center bg-gray-100 py-1 px-2 rounded"
            >
              {stack}
            </p>
          ))}
        </div>

        <div className="flex gap-3 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="flex-1 bg-secondary rounded text-white text-center py-2 px-4  hover:bg-opacity-90 transition-all"
          >
            Visit
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={gitLink}
            className="bg-gray-800 text-white rounded py-2 px-4  hover:bg-gray-700 transition-all"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

import { iconComponents } from "../../data";

export const ServiceCard = ({ icon, heading, body, tech, dataAos }) => {
  const IconComponent = iconComponents[icon];

  return (
    <div
      data-aos={dataAos}
      className="group bg-white hover:bg-secondary rounded-xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
    >
      <div className="text-secondary group-hover:text-white text-3xl mb-3 transition-colors duration-300">
        {IconComponent && <IconComponent />}
      </div>
      <h5 className="text-sm font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
        {heading}
      </h5>
      {body && (
        <p className="text-xs text-gray-500 group-hover:text-gray-100 mt-1 transition-colors duration-300 line-clamp-2">
          {body}
        </p>
      )}
    </div>
  );
};
