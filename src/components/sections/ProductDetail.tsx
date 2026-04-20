import {
  ProductDetailsSection,
  getOverriddenSection,
} from "@faststore/core";

import CustomProductInfo from "../CustomProductInfo/CustomProductInfo";
import CustomImageGallery from "../CustomImageGallery/CustomImageGallery";

const ProductDetailsCustom = getOverriddenSection({
  Section: ProductDetailsSection,
  components: {
    ImageGallery: { Component: CustomImageGallery },
    ProductTitle: { Component: CustomProductInfo }, 
  },
});

export default ProductDetailsCustom;