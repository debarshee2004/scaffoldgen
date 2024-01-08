const arr =  ["What do kids play when their mom is using the phone? Bored games.","What do you call an ant who fights crime? A vigilANTe!","Why are snails slow? Because theyre carrying a house on their back.","Whats the smartest insect? A spelling bee!",
"What does a storm cloud wear under his raincoat? Thunderwear.",
"What is fast, loud and crunchy? A rocket chip.",
"How does the ocean say hi? It waves!",
"What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
"Why did the teddy bear say no to dessert? Because she was stuffed.",
"Why did the soccer player take so long to eat dinner? Because he thought he couldnt use his hands.",
"Name the kind of tree you can hold in your hand? A palm tree!",
"What do birds give out on Halloween? Tweets.",
"What has ears but cannot hear? A cornfield.",
"whats a cats favorite dessert? A bowl full of mice-cream.",
"Where did the music teacher leave her keys? In the piano!","What did the policeman say to his hungry stomach? FreeYoure under a vest."]

let idx = Math.floor(Math.random() * arr.length)
let obj = document.getElementById('joke')

obj.innerHTML = arr[idx];