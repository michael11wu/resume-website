import './ProjectDetails.css';


const ProjectDetails = (props) => {
  return (
    <div className = 'backdrop'>
      <div className = 'backdrop-wallpaper'>
        <img className="backdrop-image" src={props.info.img} alt="example" height={120} width={198}></img>
      </div>
      <div className="backdrop-contents">
        <h6>{props.info.area}</h6>
        <h4>{props.info.name}</h4>
        <hr/>
        <p>{props.info.details}</p>
      </div>
    </div > 
  )
}

export default ProjectDetails;