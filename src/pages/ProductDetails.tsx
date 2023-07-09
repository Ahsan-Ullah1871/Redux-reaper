import ProductReview from "@/components/ProductReview";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useAppDispatch } from "@/hooks/redxuHook";
import { useGetProductDetailsQuery } from "@/redux/api/apiSlice";
import { add_to_cart } from "@/redux/features/cart/cartSlice";
import { IProduct } from "@/types/globalTypes";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const { data, error, isLoading } = useGetProductDetailsQuery(
		id as string
	);

	const product: IProduct = data;

	//*  handle add to cart
	const handleAddProduct = (product: IProduct) => {
		dispatch(add_to_cart(product));
		toast({
			description: "Product Added",
		});
	};

	return (
		<>
			<div className='flex max-w-7xl mx-auto items-center border-b border-gray-300'>
				<div className='w-[50%]'>
					<img
						src={product?.image}
						alt=''
					/>
				</div>
				<div className='w-[50%] space-y-3'>
					<h1 className='text-3xl font-semibold'>
						{product?.name}
					</h1>
					<p className='text-xl'>
						Rating: {product?.rating}
					</p>
					<ul className='space-y-1 text-lg'>
						{product?.features?.map((feature) => (
							<li key={feature}>
								{feature}
							</li>
						))}
					</ul>
					<Button
						onClick={() =>
							handleAddProduct(product)
						}>
						Add to cart
					</Button>
				</div>
			</div>
			<ProductReview />
		</>
	);
}
