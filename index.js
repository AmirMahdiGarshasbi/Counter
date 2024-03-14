let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let countArray = []


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    countArray.push(count)
    saveEl.textContent = "Previous entries: "
    for (let i = 0; i < countArray.length; i++){
        saveEl.textContent += countArray[i] + " - "
        if (countArray.length > 5) {
            countArray.splice(0,1)
        }
    } 
    countEl.textContent = 0
    count = 0
    var imgArray = ['train-1.webp', 'train-2.jfif', 'train-3.webp', 'train-4.jfif']   
    let randNum = Math.floor(Math.random() * imgArray.length)
    let randSelect = "\'" + imgArray[randNum] + "\'" 
    document.body.style.backgroundImage = 'url(' + randSelect + ')'
    
    
}