import { Grid, Card, CardActionArea, CardMedia, Backdrop } from "@mui/material";
import React, {useState} from 'react';
import ProjectDetails from "./ProjectDetails";

import "./ProjectGlance.css"
import '../UI/Card.css';

const ProjectGlance = (props) => {

  const[open, setOpen] = useState(false);

  const[backDropContent, setbackDropContent] = useState(<div>dlkfjaldjf</div>);

  const[hover, setHover] = useState(false);

  const closeHandler = () => {
      setOpen(false);
  };

  const backdropHandler = (details) => {
    setbackDropContent(details);
    setOpen(!open);
  };


  return (
    <div>
      <Grid container spacing={10} justifyContent='center' p={3}>
        {props.projectGlance.map((item,index) => {
          const backdropDetails = <ProjectDetails info={item}/>
          return (
            <Grid item xs={12} sm={12} md={6}>
              <Card className = "project">
                  <CardActionArea style={{height:'100%'}} onClick={() => backdropHandler(backdropDetails)}>
                  <div className = 'wallpaper'>
                    <CardMedia
                      component="img"
                      image= {item.img}
                      alt="example"
                      style={{ maxHeight: '100%',maxWidth: '100%'}}
                    />
                  </div>
                  <div className="overlay" id={index}>
                    <div className="overlay-contents">
                      <h6>{item.area}</h6>
                      <h4 className="name">{item.name}</h4>
                    </div>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <Backdrop open={open} onClick = {closeHandler}>
        {backDropContent}
      </Backdrop>
    </div>
  )
}

export default ProjectGlance;