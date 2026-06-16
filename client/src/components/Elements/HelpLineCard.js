import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: 'rgba(24, 52, 74, 0.95)',
        padding: '6px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1600,
        transition: 'transform 0.25s ease, opacity 0.25s ease',
        transform: 'translateY(100%)',
        opacity: 0,
        pointerEvents: 'none',
    },
    footerVisible: {
        transform: 'translateY(0)',
        opacity: 1,
        pointerEvents: 'auto',
    },
    item: {
        width: '100%',
        maxWidth: '1024px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#ffffff',
        padding: '2px 0',
    },
    title: {
        fontSize: '0.95rem',
        textAlign: 'center',
        fontWeight: 500,
        color: '#ffffff',
        marginBottom: '1px',
    },
    text: {
        fontSize: '0.8rem',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginRight: '6px',
        color: '#ffffff',
        fontSize: '0.95rem',
    }
}));

export default function HelpCard() {
    const classes = useStyles();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const nearBottom = scrollPosition >= pageHeight - 40;
            setVisible(nearBottom);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <Box className={`${classes.footer} ${visible ? classes.footerVisible : ''}`}>
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