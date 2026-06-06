import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'transparent',
        padding: '8px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1500,
        pointerEvents: 'none',
    },
    item: {
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#ffffff',
        padding: '2px 0',
        pointerEvents: 'auto',
    },
    title: {
        fontSize: '1rem',
        textAlign: 'center',
        fontWeight: 500,
        color: '#ffffff',
        marginBottom: '2px',
    },
    text: {
        fontSize: '0.85rem',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginRight: '6px',
        color: '#ffffff',
        fontSize: '1rem',
    }
}));

export default function HelpCard() {
    const classes = useStyles();
    return (
        <Box className={classes.footer}>
            <Box className={classes.item}>
                <Typography className={classes.title}>
                    Suicide Prevention Hotline
                </Typography>
                <Typography className={classes.text}>
                    <LocalPhoneIcon className={classes.icon} />800-273-8255
                </Typography>
            </Box>
            <Box className={classes.item}>
                <Typography className={classes.title}>
                    National Alliance For Mental Health Hotline
                </Typography>
                <Typography className={classes.text}>
                    <LocalPhoneIcon className={classes.icon} />800-950-NAMI (6264)
                </Typography>
            </Box>
            <Box className={classes.item}>
                <Typography className={classes.title}>
                    Substance Abuse and Mental Health Services Agency (SAMHSA)
                </Typography>
                <Typography className={classes.text}>
                    <LocalPhoneIcon className={classes.icon} />800-662-HELP (4357)
                </Typography>
            </Box>
        </Box>
    );
};