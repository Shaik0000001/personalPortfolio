function toggleChat(){

let chat = document.getElementById("chatbox")

if(chat.style.display === "block"){
chat.style.display = "none"
}
else{
chat.style.display = "block"
}

}

function handleKey(e){

if(e.key === "Enter"){

let input =
document.getElementById("userInput").value.toLowerCase()

let response=""

if(input.includes("skills")){
response="Mahaboobbasha knows Python, AI, Power BI and Web Development"
}

else if(input.includes("projects")){
response="Major project: AI Driven Government Job Intelligence Platform"
}

else if(input.includes("contact")){
response="You can contact through the form or email on this page"
}

else{
response="Please check the portfolio sections"
}

alert("ShaikAI: "+response)

document.getElementById("userInput").value=""

}

}
