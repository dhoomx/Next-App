import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import axios from "axios";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

import Layout from "../components/Layout";
import Product from "../models/Product";
//import data from "../utils/data";
import db from "../utils/db";
import { Store } from "../utils/Store";

export default function Home(props) {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { products } = props;

  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography> {product.name} </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  {" "}
                  <Typography>${product.price}</Typography>
                  <IconButton
                    aria-label="add to shopping cart"
                    size="small"
                    color="primary"
                    onClick={() => addToCartHandler(product)}
                  >
                    {" "}
                    Add to cart
                  </IconButton>
                  <AddShoppingCartIcon />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

// To get the products from the database
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
