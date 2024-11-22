const container = document.querySelector("#container");
const button = document.querySelector('button');

function defaultCanvas() {
    const defaultDivs = 16 * 16;
    for (let i = 0; i < defaultDivs; i++) {
        const div = document.createElement('div');
        div.classList.add('item');
        container.appendChild(div);
        div.textContent = ``;
     
        div.addEventListener('mouseover', () => {
         div.style.backgroundColor = 'red';
         });
        div.addEventListener('mouseout', () => {
         div.style.backgroundColor = 'lightblue';
         });
     
     };
};


function userCanvas() {
    button.addEventListener('click', () => {
        let UsersqrNum = prompt('how many squares per side do you want:');
        const sqrNum = +UsersqrNum;
         if (sqrNum < 0 || sqrNum > 100) {
             para = document.createElement('p');
             para.textContent = "please enter a postive number between 1 - 100";
             container.appendChild(para);
             return;
         }
 
         container.innerHTML = ''
         const totaldivs = sqrNum * sqrNum;
         for (let i = 0; i < totaldivs; i++) {
            const userDiv = document.createElement('div');
         userDiv.classList.add('item');
         container.appendChild(userDiv);
         userDiv.textContent = ``;
      
         userDiv.addEventListener('mouseover', () => {
          userDiv.style.backgroundColor = 'red';
          });
         userDiv.addEventListener('mouseout', () => {
          userDiv.style.backgroundColor = 'lightblue';
          });
         }
         
      
     });
};

defaultCanvas();
userCanvas();

  


