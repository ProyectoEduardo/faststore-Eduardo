import {
  ProductGallerySection,
  getOverriddenSection
} from "@faststore/core";
import FilterPlp from './FilterPlp';
import ProductCard from './ProductCard';

const ProductGalleryPlp = getOverriddenSection({
  Section: ProductGallerySection,
  components: {
    __experimentalFilterDesktop: { Component: FilterPlp },
    __experimentalProductCard: { Component: ProductCard },  
  },
});

export default ProductGalleryPlp