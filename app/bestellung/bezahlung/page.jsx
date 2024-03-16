import PayFormular from "@/app/bestellung/bezahlung/payFormular";
import PayCart from "@/app/bestellung/bezahlung/payCart";

export default async function Bezahlung() {

	return (
		<div className="flex-grow grid grid-cols-2">
			<PayFormular/>
			<PayCart/>
		</div>
	)
}