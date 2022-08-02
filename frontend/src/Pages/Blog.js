import React from 'react';
import { Card, Container, Col, Row, ListGroup } from 'react-bootstrap';

export default function Blog(){
	return(
		<Container>
			<Row>
				<Col md="9">
					<Card className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
						/>
						<Card.Body>
							<h5>Blog post</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Id natus officiis explicabo quisquam illum ipsum dolor magnam incidunt aspernatur?
								Deserunt ratione enim tempore adipisci quibusdam harum minima explicabo sit autem.
							</p>
						</Card.Body>
					</Card>
					<Card className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
						/>
						<Card.Body>
							<h5>Blog post</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Id natus officiis explicabo quisquam illum ipsum dolor magnam incidunt aspernatur?
								Deserunt ratione enim tempore adipisci quibusdam harum minima explicabo sit autem.
							</p>
						</Card.Body>
					</Card>
					<Card className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
						/>
						<Card.Body>
							<h5>Blog post</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Id natus officiis explicabo quisquam illum ipsum dolor magnam incidunt aspernatur?
								Deserunt ratione enim tempore adipisci quibusdam harum minima explicabo sit autem.
							</p>
						</Card.Body>
					</Card>
				</Col>
				<Col md="3">
					<h5 className="mt-5">Categories</h5>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>HTML/CSS</ListGroup.Item>
							<ListGroup.Item>C++</ListGroup.Item>
							<ListGroup.Item>Python</ListGroup.Item>
							<ListGroup.Item>JavaScript</ListGroup.Item>
							<ListGroup.Item>PHP</ListGroup.Item>
						</ListGroup>
					</Card>
					<Card className="mt-3" bg="light">
						<Card.Body>
							<Card.Title>Side widget</Card.Title>
							<Card.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Id natus officiis explicabo quisquam illum ipsum dolor magnam incidunt aspernatur?
								Deserunt ratione enim tempore adipisci quibusdam harum minima explicabo sit autem.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}