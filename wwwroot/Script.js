
// const url = "/api/sum?a=3&b=2"


function Calculate() {
  const a = document.getElementById("A")
  const b = document.getElementById("B")
  const sign = document.getElementById("operation").value
  
  if (a.value && b.value) {       
    const url = `/api/${sign}?a=${a.value}&b=${b.value}`    
    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        WriteResult(`api: ${url}   \n   result: ${data}`);
        a.value = "";
        b.value = "";
        
  });
  } else {
    WriteResult("Enter some data, please...");
  }

}



// fetch(url)
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     WriteResult(data);
//     // console.log(data);
//   });

function WriteResult(data) {
    const resultArea = document.querySelector(".results");       
    resultArea.innerHTML += data + "<br/>";    
    // console.log(resultArea);
}

function AddEvent() {
  const button = document.getElementById("Submit");
  button.addEventListener("click", e => {
    e.preventDefault();
    Calculate();
  })
}

AddEvent();
