import { Button, Container, Typography } from "@mui/material";

export default function ConnectToWallet() {

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h2" component="div" gutterBottom>
                No wallet detected
            </Typography>
            <Typography variant="body1" gutterBottom>
                Please connect to your wallet...
            </Typography>
            <Button onClick={() => { alert('ups') }}>
                Connect Wallet
            </Button>
        </Container>
    );
}
