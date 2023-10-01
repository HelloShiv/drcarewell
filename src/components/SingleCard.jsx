import React from "react";
import { Card } from 'antd';
const { Meta } = Card;

function SingleCard(props){
    return (
    <Card
    hoverable
    style={{
      width: 240,
      backgroundColor: 'rgb(206 255 182)'
    }}
    cover={<img alt={props.alt} src={props.src} style={{height:"200px"}}/>}
  >
    <Meta title={props.title} description={props.desc} style={{ whiteSpace: 'normal' }} />
  </Card>
  );
}
export default SingleCard;