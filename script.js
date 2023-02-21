function generateSlice() {
    let slice = document.createElement('div');
    slice.classList.add('slice');
    return slice;
}

document.querySelector('#displace').appendChild(generateSlice());