var boxes = document.querySelectorAll(".box");
let resetbtnlet = document.querySelector("#btn-set");
let newgameBtn = document.querySelector("#newbtn-set");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0 = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 4, 6],
  [6, 7, 8],
  [0, 4, 8],
  [2, 5, 8],
  [3, 4, 5],
  [6, 4, 2],
  [1, 4, 7],
];
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const resetgame =()=>{
  turn0=true;
  enabledbox();
  msgContainer.classList.add("hide");
 }


const disabledbox = ()=>{
  for (const box of boxes) {
    box.disabled=true;
  }
}
const enabledbox = ()=>{
  for (const box of boxes) {
    box.disabled=false;
    box.innerText="";
  }
}
const showwinner = (winner) => {
  msg.innerText = `Congratulations ,Winner Is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledbox();

};
const checkwinner = () => {
  for (let pattern of winpattern) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        console.log("winner");
        showwinner(posval1);
      }
    }
  }
};
newgameBtn.addEventListener("click",resetgame);
resetbtnlet.addEventListener("click",resetgame);
 