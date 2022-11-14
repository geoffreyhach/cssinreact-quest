import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const Card = styled.div`
    background-color: #cad2c5;
    min-width: 400px;
    border-radius: 20px;
    box-shadow: 2px 2px 10px -2px #52796f;
`;

const CardTopSection = styled.div`
    display: flex;
`;
const CardBottomSection = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const CardImage = styled.img`
    height: 150px;
    border-radius: 20px 0 0 0;
`;

const CardInfoSection = styled.div`
    padding: 1rem;
`;

const Title = styled.h1`
    margin: 0;
    color: #84a98c;
`;

const SubTitle = styled.h2`
    margin: 0;
    font-size: 1rem;
    color: #354f52;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #84a98c;
`;

function App() {
    return (
        <AppContainer className="App">
            <Card>
                <CardTopSection>
                    <CardImage src="https://images.unsplash.com/photo-1667374026094-56bb3b0f6f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" />
                    <CardInfoSection>
                        <Title>Artist Title</Title>
                        <SubTitle>Album name</SubTitle>
                        <SubTitle>(2022)</SubTitle>
                    </CardInfoSection>
                </CardTopSection>
                <Divider />
                <CardBottomSection>
                    <SubTitle>Rate this album</SubTitle>
                    <div>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                    </div>
                </CardBottomSection>
            </Card>
        </AppContainer>
    );
}

export default App;
