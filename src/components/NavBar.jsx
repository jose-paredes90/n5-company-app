import { MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: '100%' 
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        sx={{mr: 2, display: { sm: 'none' }}}>
                        <MenuOutlined />
                    </IconButton>

                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6" noWrap component="div">Challenge App</Typography>
                    </Grid>
                </Toolbar>
        </AppBar>
    );
}
