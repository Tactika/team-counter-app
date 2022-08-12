import React from 'react'
import { Box, Paper, Grid } from "@mui/material"
import { styled } from '@mui/material/styles';
import { Route } from 'react-router-dom'

const Layout = ({ children, ...rest }) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
        </>
    )
}
