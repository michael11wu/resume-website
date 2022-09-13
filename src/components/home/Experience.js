import { Card, CardActionArea, CardContent } from '@mui/material';
import '../UI/Card.css';

const Experience = (props) => {

  return (
    <div>
      {props.experiences.map((item,index) => {
        return (
        <Card className = 'home-card background'>
          <CardActionArea>
            <CardContent className='card-content'>
              <h5>{item.jobtitle}</h5>
              <hr></hr>
              <p>{item.company} <img className='icon' width={20} height ={20} alt='logo' src={item.imgUrl}></img></p>
              <p>{item.time}</p>
              <ul>
                {props.experiences[index].description.map(desc=> {
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