import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/832/832/l4fxh8w0/lehenga-choli/w/b/z/free-sleeveless-yl-05-rivazz-creation-original-imagfc9wrvpvjxyg.jpeg?q=70&crop=false"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Embroidered Semi Stitched Lehenga Choli </p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">
                Color: Dark Green
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹385</p>
        </Grid>
        <Grid item xs={4}>
          {true && <div>
            <p>
              <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
              <span>Delivered On March 03</span>
            </p>
            <p className="text-xs">
              Your item has been delivered
            </p>
          </div>}
          {false && (
            <p>
              <span>Expected Delivery On March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
