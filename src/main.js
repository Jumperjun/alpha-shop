const formParts = document.querySelectorAll(".part")
const steps = document.querySelectorAll(".step")
const btnControl = document.querySelector(".button")
const prevBtn = document.querySelector(".btn_outline")
const nextBtn = document.querySelector(".btn_primary")


//步驟及上下一步按鈕//
let step = 0

function handleBtnControlClicked(e) {
  e.preventDefault()
  const nowStep = steps[step]
  if (e.target.matches(".btn_primary") && e.target.innerHTML === "下一步") {
    const nextStep = steps[step + 1]
    nowStep.classList.remove("active")
    nowStep.classList.add("checked")
    nextStep.classList.add("active")
    formParts[step].classList.toggle("d-none");
    formParts[step + 1].classList.toggle("d-none");
    step += 1
  } else if (e.target.matches(".btn_outline")) {
    const prevStep = steps[step - 1]
    nowStep.classList.remove("active")
    prevStep.classList.remove("checked")
    prevStep.classList.add("active")
    formParts[step].classList.toggle("d-none");
    formParts[step - 1].classList.toggle("d-none");
    step -= 1
  }
  setBtnDisabled()
}

function setBtnDisabled() {
  if (step === 0) {
    prevBtn.setAttribute("disabled", "disabled")
  } else {
    prevBtn.removeAttribute('disabled')
  }

  if (step === 2) {
    nextBtn.innerHTML = "送出申請"
  } else {
    nextBtn.innerHTML = "下一步"
  }
}

//購物車金額計算//
const cart1 = document.querySelector(".cart_one")
const cart2 = document.querySelector(".cart_two")
const amount1 = document.querySelector(".amount1")
const amount2 = document.querySelector(".amount2")
const total1 = document.querySelector(".total1")
const total2 = document.querySelector(".total2")
const totalAmount = document.querySelector(".total_amount")

function cartOneCount(event) {
  if (event.target.matches(".icon1") || event.target.matches(".icon2")) {
    let amount = Number(amount1.innerText)
    let total = Number(total1.innerText)
    if (event.target.matches(".icon2")) {
      amount += 1
      total = amount * 3999
    }else if (event.target.matches(".icon1")) {
      if(amount>0){
      amount -= 1
      total = amount * 3999
      }
    }
    amount1.innerText = amount
    total1.innerText = total
    getTotalAmount()
  }
}

function cartTwoCount(event) {
  if (event.target.matches(".icon1") || event.target.matches(".icon2")) {
    let amount = Number(amount2.innerText)
    let total = Number(total2.innerText)
    if (event.target.matches(".icon2")) {
      amount += 1
      total = amount * 1299
    } else if (event.target.matches(".icon1")) {
      if(amount>0){
      amount -= 1
      total = amount * 1299
      }
    }
    amount2.innerText = amount
    total2.innerText = total
    getTotalAmount()
  }
}

function getTotalAmount(){
  let total_1=Number(total1.innerText)
  let total_2=Number(total2.innerText)
  total_all= total_1+total_2

  return (totalAmount.innerText=total_all)
}

btnControl.addEventListener("click", handleBtnControlClicked)
cart1.addEventListener("click", cartOneCount)
cart2.addEventListener("click", cartTwoCount)
