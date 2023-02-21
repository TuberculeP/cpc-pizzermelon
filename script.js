function generateSlice() {
    let slice = document.createElement('div');
    slice.classList.add('slice');
    return slice;
}

for(let i = 0; i<1; i++) {
    setTimeout(() => {
        document.querySelector('#displace').appendChild(generateSlice());
    }, (8000/3)*i);
}