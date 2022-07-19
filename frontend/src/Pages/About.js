import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default function About() {
	return(
		<Container>
			<Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column mt-4">
							<Nav.Item>
								<Nav.Link eventKey="first">Design</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="second">Team</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="third">Programming</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="fourth">Frameworks</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="fifth">Libraries</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content className="mt-5">
							<Tab.Pane eventKey="first">
								<img src="https://thumb.tildacdn.com/tild3930-3939-4462-b264-656534643232/-/resize/744x/-/format/webp/zeus-dribbble-01-min.png" alt="Design" />
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quas porro blanditiis in, molestias quae iure corporis,
								non perspiciatis corrupti vitae voluptatibus aperiam aliquid, laudantium sapiente.
								Modi nobis dolor blanditiis accusantium!
								</p>
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<img src="https://as2.ftcdn.net/v2/jpg/02/27/77/21/1000_F_227772195_7xYhjh7UIbEE4lpyQUScFlQHtSfTAFu7.jpg" width="800" alt="Team" />
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quas porro blanditiis in, molestias quae iure corporis,
								non perspiciatis corrupti vitae voluptatibus aperiam aliquid, laudantium sapiente.
								Modi nobis dolor blanditiis accusantium!
								</p>
							</Tab.Pane>
							<Tab.Pane eventKey="third">
								<img src="https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-scaled.jpg" width="800" alt="Programming" />
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quas porro blanditiis in, molestias quae iure corporis,
								non perspiciatis corrupti vitae voluptatibus aperiam aliquid, laudantium sapiente.
								Modi nobis dolor blanditiis accusantium!
								</p>
							</Tab.Pane>
							<Tab.Pane eventKey="fourth">
								<img src="https://i.ytimg.com/vi/Uyei2iDA4Hs/maxresdefault.jpg" width="800" alt="Frameworks" />
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quas porro blanditiis in, molestias quae iure corporis,
								non perspiciatis corrupti vitae voluptatibus aperiam aliquid, laudantium sapiente.
								Modi nobis dolor blanditiis accusantium!
								</p>
							</Tab.Pane>
							<Tab.Pane eventKey="fifth">
								<img src="https://cdn.light-it.net/articles_image/Article62_A1.jpg" width="800" alt="Libraries" />
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quas porro blanditiis in, molestias quae iure corporis,
								non perspiciatis corrupti vitae voluptatibus aperiam aliquid, laudantium sapiente.
								Modi nobis dolor blanditiis accusantium!
								</p>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</Container>
	);
}