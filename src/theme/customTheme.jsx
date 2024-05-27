import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#303F9F'
        },
        secondary: {
            main: '#757575'
        },
        error: {
            main: red.A400
        }
    }
});