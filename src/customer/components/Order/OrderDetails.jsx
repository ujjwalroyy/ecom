import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracking from "./OrderTracking";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Grid, Box } from "@mui/material";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
        <div className="py-20">
          <OrderTracking activeStep={3} />
        </div>
        <Grid className="space-y-5" container>
          {[1, 1, 1, 1, 1, 1].map((item) => (
            <Grid
              item
              container
              className="shadow-xl rounded-md p-5 border"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="space-x-4 flex items-center ">
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src="https://rukminim2.flixcart.com/image/832/832/l4fxh8w0/lehenga-choli/w/b/z/free-sleeveless-yl-05-rivazz-creation-original-imagfc9wrvpvjxyg.jpeg?q=70&crop=false"
                    alt=""
                  />
                  <div className="ml-5 space-y-2">
                    <p className="font-semibold">
                      Embroidered Semi Stitched Lehenga Choli{" "}
                    </p>
                    <p className="space-x-5 opacity-50 text-xs font-semibold">
                      <span>Color : pink</span> <span>Size: M</span>{" "}
                    </p>
                    <p>Seller: Mr Roy.</p>
                    <p>₹385</p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Box>
                  <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                  <span>Rate & Review Product</span>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default OrderDetails;
