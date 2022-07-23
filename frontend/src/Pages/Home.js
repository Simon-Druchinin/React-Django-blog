import React from 'react';
import CarouselBox from '../Components/CarouselBox'
import { Container, CardGroup, Card, Button } from 'react-bootstrap';


export default function Home(){
	return(
		<>
			<CarouselBox />
			<Container>
				<h2 className="text-center m-4">Our team</h2>
				<CardGroup className="mb-4">
					<Card className="me-4">
						<Card.Img
							variant="top"
							src="https://thumbs.dreamstime.com/b/portrait-multi-cultural-business-team-office-modern-128214540.jpg"
						/>
						<Card.Body>
							<Card.Title>Developers</Card.Title>
							<Card.Text>
								lorem ipsum dolor sit amet, consectetur adipis
								ac turpis ac turpis ac turpis ac turpis ac turpis ac
							</Card.Text>
							<Button variant="primary">About team</Button>
						</Card.Body>
					</Card>
					<Card className="me-4">
						<Card.Img
							variant="top"
							src="https://mdevelopers.com/storage/pages/pages-module/311/November2021/technology-react-native.webp"
						/>
						<Card.Body>
							<Card.Title>Developers</Card.Title>
							<Card.Text>
								lorem ipsum dolor sit amet, consectetur adipis
								ac turpis ac turpis ac turpis ac turpis ac turpis ac
							</Card.Text>
							<Button variant="primary">About team</Button>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="https://149362086.v2.pressablecdn.com/wp-content/uploads/2018/05/Creating-a-Cohesive-Office-A-Guide-to-Effective-Team-Building.jpg"
						/>
						<Card.Body>
							<Card.Title>Developers</Card.Title>
							<Card.Text>
								lorem ipsum dolor sit amet, consectetur adipis
								ac turpis ac turpis ac turpis ac turpis ac turpis ac
							</Card.Text>
							<Button variant="primary">About team</Button>
						</Card.Body>
					</Card>
				</CardGroup>
			</Container>
		</>
	);
}