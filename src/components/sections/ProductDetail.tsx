import {
  ProductDetailsSection,
  getOverriddenSection,
} from "@faststore/core";

import CustomProductInfo from "../CustomProductInfo/CustomProductInfo";
import CustomImageGallery from "../CustomImageGallery/CustomImageGallery";
import { CustomBuyButton } from "../CustomBuyButton/CustomBuyButton";

const ProductDetails = getOverriddenSection({
  Section: ProductDetailsSection,
  components: {
   // ImageGallery: { Component: CustomImageGallery },
    ProductTitle: { Component: CustomProductInfo }, 
    BuyButton: { Component: CustomBuyButton },
  },
});

export default ProductDetails;