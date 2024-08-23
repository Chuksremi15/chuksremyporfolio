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
      <img src={img} alt="" className="" />

      <h1 className="mt-3">{name}</h1>
      <p className="description">{description}</p>
      <div className="tech-stack">
        {techStack.map((stack, index) => (
          <p key={index}>{stack}</p>
        ))}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <a target="_blank" href={link} className="btn-card">
          Visit
        </a>
        <div className="relative w-[100px]">
          <a target="_blank" href={gitLink} className="float-right btn-icon">
            <i style={{ fontSize: "30px" }} class="fab fa-github"></i>
          </a>
        </div>
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
