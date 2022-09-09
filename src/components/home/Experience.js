import { Card, CardActionArea, CardContent } from '@mui/material';
import '../UI/Card.css';
import transform from '../../images/transform.png';
import depot from '../../images/depot.jfif';
import umn from '../../images/umn.png';

const Experience = () => {

  const experiences = [
    {
      jobtitle: 'Database Reports Intern',
      imgUrl: transform,
      company: 'Minnesota Transform',
      time: 'Jan 2022 - Present',
      description: ["Write reports on a large dataset using MySQL Workbench to track and organize the relational database more efficiently.",
      "Maintain a website by debugging and editing the Ruby On Rails code to create a better user experience and a better user interface while adding useful functionality. Tested the new code on a development website in order to ensure it functioned as needed.",
      "Develop thorough and detailed documentation for running reports and setting up the work environment.",]
    },
    {
      jobtitle: 'Student Manager',
      imgUrl: umn,
      company: 'University of Minnesota Track and Field Teams',
      time: 'Dec 2019 - Jun 2022',
      description: ['Unloaded trucks then moved items to salesfloor.','Ensure the store is stocked and ready for business the next day.', 'Moved excess items to storage above items for later use.']
    },
    {
      jobtitle: 'Freight/Receiving',
      imgUrl: depot,
      company: 'Home Depot',
      time: 'Jun 2020 - Aug 2020',
      description: ['Unloaded trucks then moved items to salesfloor.','Ensure the store is stocked and ready for business the next day.', 'Moved excess items to storage above items for later use.']
    }
  ]

  return (
    <div>
      {experiences.map((item,index) => {
        return (
        <Card className = 'card background'>
          <CardActionArea>
            <CardContent className='card-content'>
              <h5>{item.jobtitle}</h5>
              <hr></hr>
              <p>{item.company} <img width={20} height ={20} alt='logo' src={item.imgUrl}></img></p>
              <p>{item.time}</p>
              <ul>
                {experiences[index].description.map(desc=> {
                  return (
                    <li>{desc}</li>
                  )
                })}
              </ul>
            </CardContent>
          </CardActionArea>
        </Card>
        )
      })}
    </div>
  )
}

export default Experience;