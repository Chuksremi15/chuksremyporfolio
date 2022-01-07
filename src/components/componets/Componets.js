export const ProjectCard = ({
  img,
  name,
  description,
  link,
  gitLink,
  dataAos,
}) => {
  return (
    <div data-aos={dataAos} className="card">
      <div className="sqaure-image">
        <img src={img} alt="" className="" />
      </div>

      <h1 className="mt-3">{name}</h1>
      <p className="description">{description}</p>
      <div className="tech-stack">
        <p>NodeJS</p>
        <p>ReactJS</p>
        <p>Redux</p>
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
      <div>
        {src}
        <div className="float-right">{tech}</div>
      </div>

      <h1 className="mt-3">{heading}</h1>
      <p>{body}</p>
    </div>
  );
};
