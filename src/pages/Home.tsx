import {
	decrement,
	increment,
	incrementByAmount,
} from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redxuHook";

const Home = () => {
	const { total } = useAppSelector((state) => state.count);
	const dispatch = useAppDispatch();
	return (
		<div className='min-h-screen  bg-slate-100 '>
			<div
				className='w-auto py-5 flex flex-col gap-5 items-center 
			justify-center'
			>
				<div
					className='flex items-center justify-start
				gap-4'
				>
					<button
						className='px-2 py-2 text-white text-base bg-green-600 border border-green-600 rounded-md'
						onClick={() => dispatch(increment())}
					>
						Increment
					</button>
					<p className='text-base text-orange-500 '>
						{total}
					</p>
					<button
						className='px-2 py-2 text-white text-base bg-red-600
						 border border-red-600 rounded-md'
						onClick={() => dispatch(decrement())}
					>
						Decrement
					</button>
				</div>
				<div className='flex  justify-center'>
					<button
						className='px-2 py-2 text-white text-base bg-green-600 
						border border-green-600 rounded-md'
						onClick={() =>
							dispatch(incrementByAmount(5))
						}
					>
						Increment 5
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
