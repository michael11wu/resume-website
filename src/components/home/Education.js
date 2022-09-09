import { Card, CardActionArea, CardContent } from "@mui/material";
import '../UI/Card.css';

const Education = () => {
  return (
    <div>
      <Card className="card background">
        <CardActionArea>
          <CardContent className = 'card-content'>
            <h5>University of Minnesota - Twin Cities (May 2022)</h5>
            <p>Bachelor of Science in Computer Science</p>
            <p><strong>GPA: </strong>3.6/4</p>
            <p><strong>Awards: </strong>CSE Dean's List (2020,2021)</p>
            <p><strong>Coursework: </strong>Software Engineering, Program Development, Data Structures and Algorithms, OS, UI/UX, Databases, Internet Programming</p>
            {/* <p><strong>Skills: </strong>Java, Python, C/C++, SQL, HTML, CSS, Javascript</p> */}
          </CardContent>
        </CardActionArea>
      </Card>
    
      </div>
  )
}

export default Education;