//your JS code here. If required.
let button=document.getElementById('btn')
button.addEventListener('click',handelpromise)


async function handelpromise(){

	let text=document.getElementById("text").value
let dealy=document.getElementById("delay").value

let promiseOne=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(text)
	},dealy)
})
	try{
		let data=await promiseOne
		console.log(data)
		document.getElementById('output').innerHTML=data
	}catch(e){
		console.log(e)
	}
}


	
