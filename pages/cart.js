import { Grid, Link, Select,MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React,{useContext} from 'react'
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import NextLink from 'next/link';
import Image from 'next/image';

export default function CartScreen() {

    const {state} = useContext(Store);
    const {cart:{cartItems}} =state;
    return (
       <Layout title='Shopping Cart'>
           <Typography component='h1' variant='h1'>Shopping Cart</Typography>
           {cartItems.length === 0 ? (
           <div>
               Cart is empty. <NextLink href='/'>Go Shopping</NextLink>

           </div>
           ) : (
         
               <Grid container spacing={1}>
                   <Grid item md={9} xs={12}>
                      <TableContainer>
                          <Table>
                              <TableHead>
                                  <TableRow>Image</TableRow>
                                  <TableRow>Name</TableRow>
                                  <TableRow align='right'>Quantity</TableRow>
                                  <TableRow align='right'>Price</TableRow>
                                  <TableRow align='right'>Action</TableRow>
                              </TableHead>
                              <TableBody>
                                  {cartItems.map((item) =>(
                                      <TableRow key={item._id}>
                                          <TableCell>
                                              <NextLink href={`/product/${item.slug}`} passHref>
                                                  <Link>
                                                  <Image src={item.image} alt={item.name}
                                                  width={50} height={50}></Image>
                                                  </Link>
                                              </NextLink>
                                          </TableCell>
                                          <TableCell>
                                              <NextLink href={`/product/${item.slug}`} passHref>
                                                  <Link>
                                                 <Typography>{item.name}</Typography>
                                                  </Link>
                                              </NextLink>
                                          </TableCell>
                                          <TableCell>
                                              <Select value={item.quantity}>
                                                  {[...Array(item.countInStock).keys()].map((x) => (
                                                  <MenuItem key={x+1} value={x+1}>
                                                      {x+1}
                                                  </MenuItem>
                                                  ))}
                                              </Select>
                                          </TableCell>
                                      </TableRow>
                                  ))}
                              </TableBody>
                          </Table>

                      </TableContainer>
                   </Grid>
                   <Grid md={3}xs={12}>
                       card actions

                   </Grid>
               </Grid>
           )}

       </Layout>
    );
}