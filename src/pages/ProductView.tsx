import { useEffect, useRef, useState } from "react";
import { getProductData, ProductData } from "../api/products";
import ProductList from "../components/ProductList";

function ProductView() {
  const scrollFooter = useRef(null);

  const [productData, setProductData] = useState<ProductData[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    if (entries.length > 0 && entries[0].intersectionRatio > 0.5) {
      console.log(`scrollFooter visible...`);
      setPage(prevPage => prevPage + 1);
    }
  };

  const observer = useRef(new IntersectionObserver(intersectionCallback, {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5
  }));

  const fetchData = async (pageNum: number) => {
    setIsLoading(true);

    const fetchResult = await getProductData(pageNum);
    setProductData(prevData => [...prevData, ...fetchResult.datas]);

    setIsLoading(false);

    if (fetchResult.isEnd && scrollFooter.current) {
      console.log('loaded last page');
      setIsEnd(true);
    }
  }

  useEffect(() => {
    fetchData(page);
    if (scrollFooter.current) {
      observer.current.observe(scrollFooter.current);
    }
  }, []);

  useEffect(() => {
    console.log('page updated... page =', page);
    fetchData(page);
  }, [page]);

  useEffect(() => {
    if (isEnd && scrollFooter.current) {
      observer.current.unobserve(scrollFooter.current);
      console.log('IntersectionObeserver unobserved scrollFooter...');
    }
  }, [isEnd]);
  
  return <div>
    <ProductList productData={productData} />
    <div ref={scrollFooter}></div>
    {isEnd ? <div>마지막 데이터까지 조회했습니다.</div> : <></>}
    {isLoading ? <div>다음 데이터를 조회하고 있습니다.</div> : <></>}
  </div>
}

export default ProductView;
