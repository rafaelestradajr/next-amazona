import React from 'react';
import {useRouter} from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import {Link,Typography} from '@material-ui/core';

export default function ProductScreen() {

const router = useRouter();
const {slug} = router.query;
const product = data.products.find((a) => a.slug === slug);

if (!product) {
    return <div>Product Not Found</div>;
}




    return (
      <Layout title={product.name} description={product.description}>
          <div>
              <NextLink href='/' passHref>
                  <Link>
                  <Typography>back to products</Typography>
                  </Link>
              </NextLink>
          </div>


      </Layout>
    );
    
}

