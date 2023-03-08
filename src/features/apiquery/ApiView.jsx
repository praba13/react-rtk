import { useGetAllProductsQuery, useGetProductQuery } from './apiSlice';

const ApiView = () => {
    const { data: allproductsData, error, isError, isLoading } = useGetAllProductsQuery();
    //const { data } = useGetAllProductsQuery();
    const { data: singleProductData } = useGetProductQuery("iphone");
    //console.log(data);
    console.log(allproductsData);
    console.log(singleProductData);
    if (isLoading) return;

    return (
        <div>
            <h2>Api View</h2>
            <ol>
                {allproductsData.products?.map((product) => (
                    <li key={product.id} >{product.title}</li>
                ))}
            </ol >
            <h3>Get Products by Title</h3>
            <ol>
                {singleProductData.products?.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ol >
        </div>
    );
};

export default ApiView;