import CallToAction from './CallToAction'
import HelloWorld from './HelloWorld'
import CustomHeader from './CustomHeader'
import ProductShowcase from './ProductShowcase'
import CustomSlider from './CustomSlider'
import CustomTicker from './CustomTicker'
import CategoryGrid from './CategoryGrid'
import Newsletter from './Newsletter'
//import ProductTabs from './ProductTabs'
import HeroBanner from './HeroBanner'
import ProductDetails from './sections/ProductDetail'
import Breadcrumb from './overrides/pdp/Breadcrumb'
import ProductGalleryPlp from './overrides/plp/ProductGalleryPlp'
import ProductInfo from './overrides/pdp/ProductInfo'
import ShippingCalculator from './overrides/pdp/ShippingCalculator'
import ProductTabs from './overrides/pdp/ProductTabs'
import PDPWrapper from './overrides/pdp/PDPWrapper'
import PDPLayout from './overrides/pdp/PDPLayout'
import ProductCard from './overrides/plp/ProductCard'
import ProductGrid from './overrides/plp/ProductGrid'
import PLPBreadcrumb from './overrides/plp/PLPBreadcrumb'
import PLPLayout from './overrides/plp/PLPLayout'

export default { 
    CallToAction, 
    HelloWorld, 
    CustomHeader, 
    ProductShowcase, 
    CustomSlider, 
    CustomTicker, 
    CategoryGrid, 
    Newsletter, 
    // ProductTabs,
    HeroBanner,

    ProductDetails: ProductDetails,
    //Breadcrumb,
    ProductGallery: ProductGalleryPlp,  
    ProductInfo,
    ProductTabs,
    /*ShippingCalculator,
    PDPWrapper,
    PDPLayout,
    ProductCard,
    ProductGrid,
    //PLPBreadcrumb,
    PLPLayout,
    Filters: () => null, */
}