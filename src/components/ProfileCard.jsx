import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image3.jpg";
import image3 from "../assets/images/image2.jpg";

const ProfileCards = () => {
  const profiles = [
    {
      id: 1,
      imgSrc: image1,
      title: "Profile 1",
      desc: "Description for Profile 1",
    },
    {
      id: 2,
      imgSrc: image2,
      title: "Profile 2",
      desc: "Description for Profile 2",
    },
    {
      id: 3,
      imgSrc: image3,
      title: "Profile 3",
      desc: "Description for Profile 3",
    },
  ];

  return (
    <Row className="justify-content-around">
      {profiles.map((profile) => (
        <Col
          key={profile.id}
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          className="mb-4 mt-5"
        >
          <Card className="text-center">
            <Card.Img variant="top" src={profile.imgSrc} />
            <Card.Body>
              <Card.Title>{profile.title}</Card.Title>
              <Card.Text>{profile.desc}</Card.Text>
              <Button variant="primary">See Profile</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProfileCards;
