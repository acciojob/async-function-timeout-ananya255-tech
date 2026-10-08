//your JS code here. If required.
let text=document.getElementById("text").value
let dealy=document.getElementById("delay").value

let promiseOne=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(text)
	},dealy)
})

async function handelpromise(){
	try{
		let data=await promiseOne
		console.log(data)
		document.getElementById('output').innerHTML=data
	}catch(e){
		console.log(e)
	}
}

handelpromise()
	
