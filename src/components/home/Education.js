import { Card, CardActionArea, CardContent } from "@mui/material";
import '../UI/Card.css';

const Education = (props) => {

  const education = props.education;

  return (
    <div>
      <Card className="home-card background">
        <CardActionArea>
          <CardContent className = 'card-content'>
            <h5>{education.school}</h5>
            <p>{education.degree}</p>
            <p><strong>GPA: </strong>{education.gpa}</p>
            <p><strong>Awards: </strong>{education.awards}</p>
            <p><strong>Coursework: </strong>{education.coursework}</p>
            {/* <p><strong>Skills: </strong>Java, Python, C/C++, SQL, HTML, CSS, Javascript</p> */}
          </CardContent>
        </CardActionArea>
      </Card>
    
      </div>
  )
}

export default Education;