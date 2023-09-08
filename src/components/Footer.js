import React from 'react'
import {Container,  Navbar} from 'react-bootstrap'


function Footer(){
    return(
        <footer>
            <Navbar bg='dark' variant='dark' style={{padding: '2em'}}>
                <Container>
                    <Navbar.Text>
                        Shopping Cart implementation inspired by a tutorial on YouTube by RoadsideCoder.
                    </Navbar.Text>
                    <Navbar.Text>
                        Check out the original tutorial <a href="https://www.youtube.com/watch?v=HptuMAUaNGk">here</a>.
                    </Navbar.Text>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer