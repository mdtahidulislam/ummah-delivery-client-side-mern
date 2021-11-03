import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
import googleLogo from '../../../images/google_logo.svg';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div style={{ height: 100 + 'vh' }}>
            <div className="d-table w-100 h-100">
                <div className="d-table-cell align-middle">
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} className="text-center">
                                <div className="mb-5">
                                    <img src={googleLogo} alt="" />
                                </div>

                                <button onClick={handleGoogleSignIn} className="bnt btn-primary">Sign in with Google</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Login;