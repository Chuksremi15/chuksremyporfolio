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
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={img} alt={name} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-3">{name}</h1>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
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

        <div className="flex gap-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="flex-1 bg-secondary text-white text-center py-2 px-4 rounded hover:bg-opacity-90 transition-all"
          >
            Visit
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={gitLink}
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all"
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
      className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-secondary"
    >
      <div className="text-secondary text-5xl mb-4">
        {IconComponent && <IconComponent />}
      </div>
      <h5 className="text-lg font-bold text-gray-800">{heading}</h5>
      {body && <p className="text-gray-600 mt-2">{body}</p>}
      {tech && (
        <p className="text-xs text-gray-500 mt-2 font-semibold">{tech}</p>
      )}
    </div>
  );
};
