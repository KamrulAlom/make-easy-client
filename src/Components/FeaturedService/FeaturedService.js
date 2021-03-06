import React from 'react';
import { Link } from 'react-router-dom';
import featuredImg from '../../images/slide2.png';

const FeaturedService = () => {
	return (
		<div style={{ background: '#2095fc07' }} className="features-service py-5">
			<div className="container mb-2">
				<div className="row ">
					<div className="col-md-7 align-self-center ">
						<h1 className="style-color text-left text-3xl"> Are You a Specialized Engineer ?</h1>
						<p className="text-secondary my-5 text-left" style={{ fontSize: '20px' }}>
							Welcome. And We are inviting to join our creative team and Create your own identity. Provide Engineer
							Consultancy via video call and expand the reach of your service. We have a strong network.
						</p>
						<Link to="/registration">
							<button className="btn-main py-2 px-5 button-style mb-5">Sign Up</button>
						</Link>
					</div>
					<div className="col-md-5 mb-4">
						<img className="img-fluid" src={featuredImg} alt="service-need" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedService;
