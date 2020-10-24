const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultClass = document.querySelector(".results");


fetch(url)
    .then(promise => promise.json())
    
    .then(response => createHtml(response))

    .catch(error => resultClass.innerHTML = displayError("Error Occured in calling API!!!"))

function createHtml(response) {
    
    const data = response.results;

        resultClass.innerHTML = "";

        for (let i = 0; i < data.length; i++) {

            if (i === 8) {
                break;
            }
            resultClass.innerHTML += `<div class="result">
                                        <h3>${data[i].name}</h3>
                                        <h4>${data[i].rating}</h4>
                                        <p>${data[i].tags.length}</p>
                                        </div>`;
        }
}






// async function getResult() {

//     try {
//         const promise = await fetch(url);

//         const response = await promise.json();

//         const data = response.results;

//         resultClass.innerHTML = "";

//         for (let i = 0; i < data.length; i++) {

//             if (i === 8) {
//                 break;
//             }
//             resultClass.innerHTML += `<div class="result">
//                                         <h3>${data[i].name}</h3>
//                                         <h4>${data[i].rating}</h4>
//                                         <p>${data[i].tags.length}</p>
//                                         </div>`;
//         }
//     } catch (error) {
//         resultClass.innerHTML = displayError("Error Occured there!!!")
        
//     }

// }
//   getResult();