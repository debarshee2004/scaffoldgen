import { useState } from 'react'
import InputBox from './components/InputBox'
import Text from './components/Text'
import useCurrencyInfo from './hooks/useCurrencyInfo'



function App() {

	const [amount, setAmount] = useState('')
	const [from, setFrom] = useState("usd")
	const [to, setTo] = useState("inr")
	const [convertedAmount, setConvertedAmount] = useState('')
	const [showtext, setShowtext] = useState('')

	const currencyInfo = useCurrencyInfo(from)

	const options = Object.keys(currencyInfo)

	const swap = () => {
		setFrom(to)
		setTo(from)
		setConvertedAmount(amount)
		setAmount(convertedAmount)
        setShowtext(`${convertedAmount} in ${to} = ${amount} in ${from}`);
	}

	const convert = () => {
		//console.log(amount + " amount");
		//console.log(convertedAmount + " converted amount 1");
		setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
		//console.log(convertedAmount + " converted amount");

	}

	const show = () => {
		convert();
		setShowtext(`${amount} in ${from} = ${convertedAmount} in ${to}`);
	}



	return (
		<div
			className="w-full h-screen flex  justify-start  items-center bg-cover bg-no-repeat"
			style={{
				backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
			}}
		>

			<div className="w-full">
				<div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5  backdrop-blur-lg">
					<form
						onSubmit={(e) => {
							e.preventDefault();

							show();

						}}
					>
						<div className="w-full mb-1">
							<InputBox
								label="From"
								amount={amount}
								setAmount={setAmount}
								currencyOptions={options}
								onCurrencyChange={(currency) => setFrom(currency)}
								selectCurrency={from}
							/>
						</div>
						<div className="relative w-full h-0.5">
							<button
								type="button"
								className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-orange-600 text-white px-2 py-0.5"
								onClick={swap}
							>
								swap
							</button>
						</div>
						<div className="w-full mt-1 mb-4">
							<InputBox
								label="To"
								amount={convertedAmount}
								currencyOptions={options}
								onCurrencyChange={(currency) => setTo(currency)}
								selectCurrency={to}
								amountDisable
							/>
						</div>
						<div className='show-text text-white font-bold text-lg'>
							{showtext}
						</div>
						<button type="submit" className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg"
							onClick={convert}>
							Convert {from.toUpperCase()} to {to.toUpperCase()}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App