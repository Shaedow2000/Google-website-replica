const input = document.getElementById( 'search-input' );

const iconsDiv = document.getElementById( 'two-icons' );
const xmark = document.getElementById( 'x-mark' );

const search_button = document.getElementById( 'search-button' );

const apps_button = document.getElementById( 'apps' );
const apps_menu = document.getElementById( 'apps-menu' );

const account_button = document.getElementById( 'account' );
const account_menu = document.getElementById( 'account-menu' );

const google_search = 'https://www.google.com/search?q=';

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
        let search_query = input.value;

        search_query = search_query.replaceAll( ' ', '+' );

        location.href = `${ google_search }${ search_query }` 
    }
} );

search_button.addEventListener( 'click', () => {
    let search_query = input.value;
    search_query = search_query.replaceAll( ' ', '+' );

    location.href = `${ google_search }${ search_query }`;
} );

apps_button.addEventListener( 'click', () => {
    apps_menu.classList.toggle( 'hide' );
} );

account_button.addEventListener( 'click', () => {
    account_menu.classList.toggle( 'hide' );
} );
