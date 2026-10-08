//your JS code here. If required.
let text=document.getElementById("text").values
let dealy=document.getElementById("delay").values

let promiseOne=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(text)
	},dealy)
})

async function handelpromise(){
	try{
		let data=await promiseOne()
		console.log(data)
		document.getElementById('output').innerHtml=data
	}catch(e){
		console.log(e)
	}
}

handelpromise()
	
