const input = document.getElementById( 'search-input' );

const iconsDiv = document.getElementById( 'two-icons' );
const xmark = document.getElementById( 'x-mark' );

input.addEventListener( 'keyup', () => {
    const value = input.value;

    if ( value === '' ) {
        iconsDiv.style.display = 'block';
        xmark.style.display = 'none';
    } else {
        iconsDiv.style.display = 'none';
        xmark.style.display = 'block';
    }
} );
