import { Button, Link, List, ListItem, TextField, Typography } from '@material-ui/core';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';







export default function Login() {
    const classes = useStyles();
    return (
        <div>
            <Layout title = 'login'>
                <form className={classes.form}>
                    <Typography>
                        Login
                    </Typography>

                    <List>
                        <ListItem>
                            <TextField variant='outlined'
                            fullWidth
                            id='email'
                            label='Email'
                            inputProps={{type:'email'}}>
                                

                            </TextField>
                        </ListItem>

                        <ListItem>
                            <TextField variant='outlined'
                            fullWidth
                            id='password'
                            label='password'
                            inputProps={{type:'password'}}>

                            </TextField>
                        </ListItem>

                        <ListItem>
                           <Button variant='contained' type='submit'
                           fullWidth
                           color='primary'
                            >Login</Button>
                        </ListItem>
                        <ListItem>

                            Don&apos;t  have an account? &nbsp; <NextLink href='/register' passHref>
                                <Link>
                                Register
                                </Link>
                            </NextLink>
                        </ListItem>
                    </List>
                </form>

            </Layout>
        </div>
    )
}

