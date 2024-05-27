import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { customTheme } from "./customTheme";

export const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}