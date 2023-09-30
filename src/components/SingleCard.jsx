import React from "react";
import { Card } from 'antd';
const { Meta } = Card;

function SingleCard(props){
    return (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt={props.alt} src={props.src} />}
  >
    <Meta title={props.title} description={props.desc} />
  </Card>
  );
}
export default SingleCard;