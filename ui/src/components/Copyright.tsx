import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://joserodrigues443.github.io">
                JoseRodrigues443/blockedin
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
