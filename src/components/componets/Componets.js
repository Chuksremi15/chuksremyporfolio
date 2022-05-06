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
    <div data-aos={dataAos} className="card">
      <div className="sqaure-image">
        <img src={img} alt="" className="" />
      </div>

      <h1 className="mt-3">{name}</h1>
      <p className="description">{description}</p>
      <div className="tech-stack">
        {techStack.map((stack, index) => (
          <p key={index}>{stack}</p>
        ))}
      </div>
      <div>
        <a href={link} className="btn-card">
          <i className="fas fa-eye"></i> Visit
        </a>
        <a href={gitLink} className="float-right btn-icon">
          <i className="fab fa-github"></i> Github
        </a>
      </div>
    </div>
  );
};

export const ServiceCard = ({ src, heading, body, tech, dataAos }) => {
  return (
    <div data-aos={dataAos} className="card">
      <div>{src}</div>
      <h5 className="mt-3">{heading}</h5>
    </div>
  );
};
