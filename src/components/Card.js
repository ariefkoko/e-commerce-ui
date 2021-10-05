import { AiFillStar } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

export default function Card({ detail }) {
	return (
		<div className="p-3 flex flex-col bg-white rounded-xl shadow-sm text-sm">
			<img
				src={detail.imageUrl}
				style={{ width: "60%" }}
				className="mx-auto mt-4 my-8"
			/>
			<div>{detail.name}</div>
			<div className="font-medium">USD {detail.price}</div>
			<div className="mt-4 flex justify-between text-xs">
				<div className="flex">
					<AiFillStar className="my-auto mr-1" />
					<span className="my-auto">{detail.rating}</span>
				</div>
				<div className="my-auto">{detail.reviews} reviews</div>
				<FiMoreVertical size={20} />
			</div>
		</div>
	);
}
