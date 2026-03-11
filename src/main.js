const input = document.getElementById( 'search-input' );

const iconsDiv = document.getElementById( 'two-icons' );
const xmark = document.getElementById( 'x-mark' );

input.addEventListener( 'keyup', ( e ) => {
    const value = input.value;

    if ( value === '' ) {
        iconsDiv.style.display = 'block';
        xmark.style.display = 'none';
    } else {
        iconsDiv.style.display = 'none';
        xmark.style.display = 'block';
    }

    if ( value !== '' && e.key === 'Enter' ) {
        const google_search = 'https://www.google.com/search?q='
        let search_query = input.value;

        search_query = search_query.replaceAll( ' ', '+' );

        location.href = `${ google_search }${ search_query }` 
    }
} );
