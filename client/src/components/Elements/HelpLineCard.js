import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
        marginBottom: '5px',
        border: 'none',
    },
    title: {
        fontSize: '2rem',
        textAlign: 'center',
        color: '#ffffff'
    },
    text: {
        fontSize: '1.5rem',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginRight: '10px',
        color: '#ffffff',
    }
}));

export default function HelpCard() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.card}>
                <Typography className={classes.title}>
                    Suicide Prevention Hotline
                </Typography>
                <Typography className={classes.text}>
                    <LocalPhoneIcon className={classes.icon} />800-273-8255
                </Typography>
            </Box>
            <Box className={classes.card}>
                <Typography className={classes.title}>
                    National Alliance For Mental Health Hotline
                </Typography>
                <Typography className={classes.text}>
                    <LocalPhoneIcon className={classes.icon} />800-950-NAMI (6264)
                </Typography>
            </Box>
            <Box className={classes.card}>
                <Typography className={classes.title}>
                    Substance Abuse and Mental Health Services Agency (SAMHSA)
                </Typography>
                <Typography className={classes.text}>
                    <LocalPhoneIcon className={classes.icon} />800-662-HELP (4357)
                </Typography>
            </Box>
        </>
    );
};