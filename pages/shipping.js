import { Button, Link, List, ListItem, TextField, Typography } from '@material-ui/core';
import NextLink from 'next/link';
import React,{useContext, useEffect} from 'react';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';

import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Controller,useForm } from 'react-hook-form';








export default function Shipping() {
    const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
     
    const router = useRouter();
    const {redirect} = router.query; // login?redirect=/shipping

    const {state,dispatch} = useContext(Store);
    const {userInfo} = state;
    useEffect (() =>{
        if(!userInfo) {
            router.push('/login?redirect=/shipping');

        }
    }, []);
    
    const classes = useStyles();
    const submitHandler =  ({
        fullName,
        address,
        city,
        postalCode,
        country,
    }) => {
       
      
       
        dispatch({type:'SAVE_SHIPPING_ADDRESS'
        ,payload:{fullName,address,city,postalCode,country},
    });
        Cookies.set('shippingAddress',{
        fullName,
        address,
        city,
        postalCode,
        country,
    })

      


        router.push('/payment');
        
      
        
       
  

    };
    return (
     
            <Layout title = 'Shipping Address'>
                <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
                    <Typography>
                        Shipping Address
                    </Typography>

                    <List>

                    <ListItem>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                 minLength:2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    
                    error={Boolean(errors.fullName)}
                    helperText=
                    {errors.fullName
                      ? errors.fullName.type==='minLength'   
                      ?'Full Name length is more than 1'
                      :'Full Name is required'
                      :''     
                    }          
                      {...field}
                      ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                 minLength:2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="address"
                    label="Address"
                    
                    error={Boolean(errors.fullName)}
                    helperText=
                    {errors.address
                      ? errors.address.type==='minLength'   
                      ?'Address length is more than 1'
                      :'Address is required'
                      :''     
                    }          
                      {...field}
                      ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                 minLength:2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="city"
                    label="City"
                    
                    error={Boolean(errors.city)}
                    helperText=
                    {errors.city
                      ? errors.city.type==='minLength'   
                      ?' City length is more than 1'
                      :'City is required'
                      :''     
                    }          
                      {...field}
                      ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="postalCode"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                 minLength:2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="postalCode"
                    label="Postal Zip Code"
                    
                    error={Boolean(errors.postalCode)}
                    helperText=
                    {errors.postalCode
                      ? errors.postalCode.type==='minLength'   
                      ?'Postal Zip Code length is more than 1'
                      :'Postal Zip Code is required'
                      :''     
                    }          
                      {...field}
                      ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                 minLength:2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="country"
                    label="Country"
                    
                    error={Boolean(errors.fullName)}
                    helperText=
                    {errors.country
                      ? errors.country.type==='minLength'   
                      ?'Country Name length is more than 1'
                      :'Country Name is required'
                      :''     
                    }          
                      {...field}
                      ></TextField>
                )}
              ></Controller>
            </ListItem>

                        <ListItem>
                           <Button variant='contained' type='submit'
                           fullWidth
                           color='primary'
                            >Continue</Button>
                        </ListItem>
                        
                    </List>
                </form>

            </Layout>
      
    );
}
