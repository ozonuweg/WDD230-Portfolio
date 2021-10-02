// function doSomething(event){
//     console.log(event.type);
// }

// addEventListener('click', doSomething);




const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});