import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Col, Row } from "antd";
import { Card } from "antd";
//import { SearchOutlined } from "@ant-design/icons";
import "../Dashboard/Sidebar.css";
import C1 from "../../assets/images/C1.png";


const { Content } = Layout;


type cardDetailsProps = {
    title: string
    cardImage: string
    description: string
    card1paragraph: string
    card2paragraph: string
}


const Content1 = (props:cardDetailsProps) => {
    //console.log(props.title);
    return (
        
<Content style={{ margin: "30px 10px" }}>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
  <Col className="gutter-row" span={6}>
    <div className="site-card-border-less-wrapper">
      <Card style={{ width: 290, height: 130 }} className="card1">
        <Row>
          <Col span={6}>
            <img src={props.cardImage} className="cardImg" />
          </Col>
          <Col span={18}>
            <h3 className="cardTitile">{props.title}</h3>
            <p className="cardPara">{props.description}</p>
            <p className="cardSpan">{props.card1paragraph}</p>
          </Col>
        </Row>
      </Card>
    </div>
    {/* <div className="card2">
        <span className="card2para">{prop.card2paragraph}</span>
    </div> */}
  </Col>
  {/* <Col className="gutter-row" span={6}>
    <div className="site-card-border-less-wrapper">
      <Card style={{ width: 270, height: 140 }} className="card1">
        <Row>
          <Col span={6}>
            <img src={C1} className="cardImg" />
          </Col>
          <Col span={18}>
            <h3 className="cardTitile">GRN approval</h3>
            <p className="cardPara">WF_PO_PROCESSING_STD2</p>
            <p className="cardSpan">
              Leave application for admin approval
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  </Col>
  <Col className="gutter-row" span={6}>
    <div className="site-card-border-less-wrapper">
      <Card style={{ width: 270, height: 140 }} className="card1">
        <Row>
          <Col span={6}>
            <img src={C1} className="cardImg" />
          </Col>
          <Col span={18}>
            <h3 className="cardTitile">GRN approval</h3>
            <p className="cardPara">WF_PO_PROCESSING_STD2</p>
            <p className="cardSpan">
              Leave application for admin approval
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  </Col>
  <Col className="gutter-row" span={6}>
    <div className="site-card-border-less-wrapper">
      <Card style={{ width: 270, height: 140 }} className="card1">
        <Row>
          <Col span={6}>
            <img src={C1} className="cardImg" />
          </Col>
          <Col span={18}>
            <h3 className="cardTitile">GRN approval</h3>
            <p className="cardPara">WF_PO_PROCESSING_STD2</p>
            <p className="cardSpan">
              Leave application for admin approval
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  </Col> */}
</Row>
</Content>
  );
}
export default Content1;